import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { file, filename } = req.body;

    // il file deve arrivare come base64
    const buffer = Buffer.from(file, "base64");

    const { data, error } = await supabase.storage
      .from('media')
      .upload(filename, buffer, {
        contentType: 'image/jpeg', // o dinamico
        upsert: true
      });

    if (error) throw error;

    const { data: publicUrl } = supabase
      .storage
      .from('media')
      .getPublicUrl(filename);

    return res.status(200).json({ url: publicUrl.publicUrl });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
