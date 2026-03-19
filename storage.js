window.voiceNoteStorage = {
  async save(photos, audioBlob) {
    try {
      if (!window.vercelBlobUpload) throw new Error("Vercel Blob Client SDK not loaded via ESM");

      // 1. Upload audio directly from client
      const audioData = await window.vercelBlobUpload(`audio-${Date.now()}.webm`, audioBlob, {
        access: 'public',
        handleUploadUrl: '/api/upload',
      });
      if (!audioData.url) throw new Error('Audio upload failed');

      // 2. Upload photos directly from client
      const photoUrls = await Promise.all(photos.map(async (p, idx) => {
        let photoBlob;
        if (typeof p.imageUrl === 'string' && p.imageUrl.startsWith('blob:')) {
          const res = await fetch(p.imageUrl);
          photoBlob = await res.blob();
        } else {
          return p.imageUrl || p;
        }

        const photoData = await window.vercelBlobUpload(`photo-${Date.now()}-${idx}.jpg`, photoBlob, {
          access: 'public',
          handleUploadUrl: '/api/upload',
        });
        return photoData.url;
      }));

      // 3. Save to Redis
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
  },

  async edit(id, newPhotos, newAudioBlob) {
    try {
      if (!window.vercelBlobUpload) throw new Error("Vercel Blob Client SDK not loaded via ESM");
      
      let recordUpdates = { id };
      
      if (newAudioBlob) {
        const audioData = await window.vercelBlobUpload(`audio-edit-${Date.now()}.webm`, newAudioBlob, {
          access: 'public',
          handleUploadUrl: '/api/upload',
        });
        recordUpdates.audioUrl = audioData.url;
      }

      if (newPhotos && newPhotos.length > 0) {
        const photoUrls = await Promise.all(newPhotos.map(async (p, idx) => {
          const photoData = await window.vercelBlobUpload(`photo-edit-${Date.now()}-${idx}.jpg`, p.blob, {
            access: 'public',
            handleUploadUrl: '/api/upload',
          });
          return photoData.url;
        }));
        recordUpdates.photos = photoUrls;
      }

      await fetch('/api/memories', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recordUpdates)
      });
      return true;
    } catch (e) {
      console.error("Edit failed:", e);
      throw e;
    }
  }
};
