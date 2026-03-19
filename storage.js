window.voiceNoteStorage = {
  async save(photos, audioBlob) {
    try {
      // 1. Upload audio to Vercel Blob
      const audioRes = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'x-filename': `audio-${Date.now()}.webm`,
          'content-type': audioBlob.type || 'audio/webm'
        },
        body: audioBlob
      });
      const audioData = await audioRes.json();
      if (!audioData.url) throw new Error('Audio upload failed');

      // 2. Upload photos to Vercel Blob
      const photoUrls = await Promise.all(photos.map(async (p, idx) => {
        let photoBlob;
        if (typeof p.imageUrl === 'string' && p.imageUrl.startsWith('blob:')) {
          const res = await fetch(p.imageUrl);
          photoBlob = await res.blob();
        } else {
          return p.imageUrl || p;
        }

        const photoRes = await fetch('/api/upload', {
          method: 'POST',
          headers: {
            'x-filename': `photo-${Date.now()}-${idx}.jpg`,
            'content-type': photoBlob.type || 'image/jpeg'
          },
          body: photoBlob
        });
        const photoData = await photoRes.json();
        return photoData.url;
      }));

      // 3. Save to KV
      const record = {
        id: Date.now(),
        timestamp: Date.now(),
        photos: photoUrls,
        audioUrl: audioData.url,
        active: true
      };

      const kvRes = await fetch('/api/memories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
      });
      const kvData = await kvRes.json();
      
      return kvData.record;
    } catch (e) {
      console.error("Save failed:", e);
      throw e;
    }
  },

  async list() {
    try {
      const res = await fetch('/api/memories');
      return await res.json();
    } catch (e) {
      console.error("List failed:", e);
      return [];
    }
  },

  async getActive() {
    const memories = await this.list();
    const activeData = memories.find(m => m.active) || (memories.length > 0 ? memories[memories.length - 1] : null);
    if (!activeData) return null;
    
    // Fetch the audio and convert to Blob for frontend compatibility (ArrayBuffer requirement)
    let audioBlob = null;
    if (activeData.audioUrl) {
      try {
        const res = await fetch(activeData.audioUrl);
        audioBlob = await res.blob();
      } catch (e) {
        console.error("Failed fetching active audio blob", e);
      }
    }
    
    return {
      ...activeData,
      audio: audioBlob || activeData.audio,
      photos: activeData.photos || []
    };
  },

  async setActive(id) {
    await fetch('/api/memories', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
  },

  async delete(id) {
    await fetch('/api/memories', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    });
  }
};
