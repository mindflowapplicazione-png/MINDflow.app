export const config = { runtime: "edge" };
import { db } from "../lib/Supabase.js";

export default async function handler(req) {
  if (req.method !== "POST") return new Response("Use POST", { status: 405 });
  try {
    const body = await req.json(); // { text, media_urls[] }
    const user_id = null; // se non usi auth; altrimenti prendi da JWT
    const row = await db.insertFeed({ user_id, text: body.text || "", media_urls: body.media_urls || [] });
    return Response.json({ ok: true, row });
  } catch (e) {
    return new Response(String(e), { status: 500 });
  }
}
