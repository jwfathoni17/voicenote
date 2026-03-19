import { handleUpload } from '@vercel/blob/client';

export default async function handler(request, response) {
  const body = request.body;

  try {
    const jsonResponse = await handleUpload({
      body: body,
      request: request,
      onBeforeGenerateToken: async (pathname) => {
        // Allows the browser to securely upload files directly up to 500 MB
        return {
          allowedContentTypes: ['audio/webm', 'audio/mp4', 'audio/mpeg', 'audio/mp3', 'image/jpeg', 'image/png'],
          tokenPayload: JSON.stringify({}),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        console.log("Blob upload completed:", blob.url);
      },
    });

    return response.status(200).json(jsonResponse);
  } catch (error) {
    console.error('Upload Error:', error);
    return response.status(400).json({ error: error.message });
  }
}
