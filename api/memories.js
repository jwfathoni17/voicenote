import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  const KEY = 'voicenote_memories';
  
  try {
    if (req.method === 'GET') {
      const memories = await kv.get(KEY) || [];
      return res.status(200).json(memories);
    }
    
    if (req.method === 'POST') {
      const data = req.body;
      let memories = await kv.get(KEY) || [];
      
      const newRecord = { ...data, id: data.id || Date.now() };
      
      if (newRecord.active) {
        memories = memories.map(m => ({ ...m, active: false }));
      }
      
      memories.push(newRecord);
      await kv.set(KEY, memories);
      
      return res.status(200).json({ success: true, record: newRecord });
    }
    
    if (req.method === 'PUT') {
      const { id } = req.body;
      let memories = await kv.get(KEY) || [];
      
      memories = memories.map(m => ({
        ...m,
        active: m.id === id
      }));
      
      await kv.set(KEY, memories);
      return res.status(200).json({ success: true });
    }
    
    if (req.method === 'DELETE') {
      const { id } = req.body;
      let memories = await kv.get(KEY) || [];
      
      memories = memories.filter(m => m.id !== id);
      await kv.set(KEY, memories);
      
      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (error) {
    console.error('KV error:', error);
    return res.status(500).json({ error: error.message });
  }
}
