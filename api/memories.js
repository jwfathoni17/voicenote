import Redis from 'ioredis';

// Vercel auto-injects REDIS_URL when you link a Redis database
const redisUrl = process.env.REDIS_URL || process.env.KV_URL;
const redis = redisUrl ? new Redis(redisUrl) : null;

export default async function handler(req, res) {
  if (!redis) {
    return res.status(500).json({ error: 'REDIS_URL environment variable is missing in Vercel. Please add it to your project settings.' });
  }

  const KEY = 'voicenote_memories';
  
  try {
    if (req.method === 'GET') {
      const data = await redis.get(KEY);
      const memories = data ? JSON.parse(data) : [];
      return res.status(200).json(memories);
    }
    
    if (req.method === 'POST') {
      const data = req.body;
      const rawData = await redis.get(KEY);
      let memories = rawData ? JSON.parse(rawData) : [];
      
      const newRecord = { ...data, id: data.id || Date.now() };
      
      if (newRecord.active) {
        memories = memories.map(m => ({ ...m, active: false }));
      }
      
      memories.push(newRecord);
      await redis.set(KEY, JSON.stringify(memories));
      
      return res.status(200).json({ success: true, record: newRecord });
    }
    
    if (req.method === 'PUT') {
      const { id } = req.body;
      const rawData = await redis.get(KEY);
      let memories = rawData ? JSON.parse(rawData) : [];
      
      memories = memories.map(m => ({
        ...m,
        active: m.id === id
      }));
      
      await redis.set(KEY, JSON.stringify(memories));
      return res.status(200).json({ success: true });
    }
    
    if (req.method === 'DELETE') {
      const { id } = req.body;
      const rawData = await redis.get(KEY);
      let memories = rawData ? JSON.parse(rawData) : [];
      
      memories = memories.filter(m => m.id !== id);
      await redis.set(KEY, JSON.stringify(memories));
      
      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (error) {
    console.error('Redis error:', error);
    return res.status(500).json({ error: error.message });
  }
}
