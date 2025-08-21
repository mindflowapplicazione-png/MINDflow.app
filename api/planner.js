export const config = { runtime: "edge" };
import { db } from "../lib/Supabase.js";

export default async function handler(req) {
  if (req.method === "POST") {
    const body = await req.json(); // { start_ts, end_ts, title }
    const user_id = null;
    const row = await db.insertPlan({ user_id, ...body });
    return Response.json({ ok: true, row });
  }
  if (req.method === "PATCH") {
    const { id, done } = await req.json();
    const row = await db.updatePlan(id, { done: !!done });
    return Response.json({ ok: true, row });
  }
  return new Response("Use POST/PATCH", { status: 405 });
}
