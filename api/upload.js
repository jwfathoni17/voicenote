import { put } from '@vercel/blob';

export const config = {
  api: {
    bodyParser: false, // Disables standard body parser so we can receive the raw bit stream of the file
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  
  // Custom headers sent by frontend
  const filename = req.headers['x-filename'] || `file-${Date.now()}.bin`;
  const contentType = req.headers['content-type'] || 'application/octet-stream';
  
  try {
    // put() uploads the stream directly to Vercel Blob
    const blob = await put(filename, req, {
      access: 'public',
      contentType: contentType,
    });
    return res.status(200).json(blob);
  } catch (error) {
    console.error('Blob upload error:', error);
    return res.status(500).json({ error: error.message });
  }
}
