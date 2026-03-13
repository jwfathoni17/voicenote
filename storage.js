
const DB_NAME = 'VoiceNoteKeepsakeDB';
const DB_VERSION = 1;
const STORE_NAME = 'memories';

const initDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

window.voiceNoteStorage = {
  async save(photos, audioBlob) {
    const db = await initDB();
    // Convert photo blobs to local data or just store metadata if they are external
    // If they are local Blob URLs from URL.createObjectURL, we need to convert them to Blobs to persist
    const photoBlobs = await Promise.all(photos.map(async p => {
        if (typeof p.imageUrl === 'string' && p.imageUrl.startsWith('blob:')) {
            try {
                const res = await fetch(p.imageUrl);
                return await res.blob();
            } catch (e) {
                console.error("Failed to fetch blob", e);
                return p.imageUrl;
            }
        }
        return p.imageUrl;
    }));

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const record = {
        timestamp: Date.now(),
        photos: photoBlobs,
        audio: audioBlob,
        active: true
      };
      
      // Deactivate others
      store.openCursor().onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          const data = cursor.value;
          data.active = false;
          cursor.update(data);
          cursor.continue();
        } else {
          store.add(record);
          resolve();
        }
      };
      transaction.onerror = () => reject(transaction.error);
    });
  },

  async list() {
    const db = await initDB();
    return new Promise((resolve) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
    });
  },

  async getActive() {
    const memories = await this.list();
    return memories.find(m => m.active) || (memories.length > 0 ? memories[memories.length - 1] : null);
  },

  async setActive(id) {
    const db = await initDB();
    return new Promise((resolve) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      store.openCursor().onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          const data = cursor.value;
          data.active = (data.id === id);
          cursor.update(data);
          cursor.continue();
        } else {
          resolve();
        }
      };
    });
  },

  async delete(id) {
    const db = await initDB();
    return new Promise((resolve) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      store.delete(id);
      transaction.oncomplete = () => resolve();
    });
  }
};
