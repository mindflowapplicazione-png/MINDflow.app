import { serverClient } from "../lib/supabase";

export const config = { api: { bodyParser: false } }; // Vercel Node runtime

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Use POST");

  // Parse FormData senza librerie pesanti
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const buffer = Buffer.concat(chunks);

  // molto semplice: usiamo boundary per estrarre file (mobile friendly).
  const ct = req.headers["content-type"] || "";
  const boundary = /boundary=(.*)$/i.exec(ct)?.[1];
  if (!boundary) return res.status(400).send("No boundary");

  const parts = buffer.toString("binary").split(`--${boundary}`);
  const files = [];
  for (const p of parts) {
    if (!/Content-Disposition/i.test(p) || !/filename="/i.test(p)) continue;
    const nameMatch = /filename="([^"]+)"/i.exec(p);
    const typeMatch = /Content-Type:\s*([^\r\n]+)/i.exec(p);
    const start = p.indexOf("\r\n\r\n");
    const bin = p.slice(start + 4, p.lastIndexOf("\r\n"));
    files.push({ filename: nameMatch?.[1] || `file-${Date.now()}`, mime: typeMatch?.[1] || "application/octet-stream", data: Buffer.from(bin, "binary") });
  }

  if (!files.length) return res.status(400).send("No files");

  const supa = serverClient();
  const urls = [];
  for (const f of files) {
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}/${f.filename}`;
    const { error } = await supa.storage.from("media").upload(path, f.data, { contentType: f.mime, upsert: false });
    if (error) return res.status(500).send(error.message);
    const { data } = supa.storage.from("media").getPublicUrl(path);
    urls.push(data.publicUrl);
  }

  res.setHeader("Content-Type","application/json");
  res.status(200).send(JSON.stringify({ urls }));
}
