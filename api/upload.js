export const config = { runtime: "nodejs" };

import { uploadToStorage, db } from "../lib/Supabase.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Use POST");

  try {
    // Expect: multipart/form-data con campo "file" + optional "text" + "type"
    // Se arrivi dal client come base64, puoi mandare JSON {filename, dataBase64, text, type}
    const contentType = req.headers["content-type"] || "";
    if (contentType.includes("application/json")) {
      const { filename, dataBase64, text = "", type = "feed" } = req.body || {};
      if (!filename || !dataBase64) return res.status(400).json({ error: "Missing file" });
      const bytes = Buffer.from(dataBase64.split(",").pop(), "base64");
      const url = await uploadToStorage(`${Date.now()}-${filename}`, bytes);

      // Persist nelle tabelle “feed” o “moods” in base a type
      const user_id = req.headers["x-user-id"] || null; // opzionale (se in futuro usi auth)
      if (type === "feed") {
        await db.insertFeed({ user_id, text, media_urls: [url] });
      }
      return res.json({ url });
    }

    // Se preferisci form-data lato client, qui ci vorrebbe un parser (es. busboy).
    return res.status(400).json({ error: "Send JSON {filename, dataBase64}" });
  } catch (e) {
    console.error(e);
    res.status(500).send(String(e));
  }
}
