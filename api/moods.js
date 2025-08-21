export const config = { runtime: "edge" };
import { db } from "../lib/Supabase.js";

export default async function handler(req) {
  if (req.method !== "POST") return new Response("Use POST", { status: 405 });
  try {
    const body = await req.json(); // { when_ts, emoji, intensity, trigger, why, selfcare, media_urls[] }
    const user_id = null;
    const row = await db.insertMood({ user_id, ...body });
    return Response.json({ ok: true, row });
  } catch (e) {
    return new Response(String(e), { status: 500 });
  }
}
