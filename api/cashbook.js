export const config = { runtime: "edge" };
import { db } from "../lib/Supabase.js";

export default async function handler(req) {
  if (req.method !== "POST") return new Response("Use POST", { status: 405 });
  const body = await req.json(); // { kind: 'in'|'out', amount, description }
  const user_id = null;
  const row = await db.insertCash({ user_id, ...body });
  return Response.json({ ok: true, row });
}
