// lib/Supabase.js
const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE_KEY;
const ANON = process.env.SUPABASE_ANON_PUBLIC;

// Mini wrapper REST (no @supabase/supabase-js per compat Edge/Node)
async function sbFetch(path, opt = {}) {
  const url = `${SUPABASE_URL}/rest/v1${path}`;
  const headers = {
    apikey: SERVICE_ROLE,
    Authorization: `Bearer ${SERVICE_ROLE}`,
    'Content-Type': 'application/json',
    Prefer: 'return=representation'
  };
  const r = await fetch(url, { ...opt, headers: { ...headers, ...(opt.headers || {}) } });
  if (!r.ok) throw new Error(await r.text());
  return r.json();
}

export const db = {
  // FEED
  insertFeed: (data) =>
    sbFetch('/feed_posts', { method: 'POST', body: JSON.stringify(data) }),
  // MOODS
  insertMood: (data) =>
    sbFetch('/moods', { method: 'POST', body: JSON.stringify(data) }),
  // PLANNER
  insertPlan: (data) =>
    sbFetch('/planner', { method: 'POST', body: JSON.stringify(data) }),
  updatePlan: (id, patch) =>
    sbFetch(`/planner?id=eq.${id}`, { method: 'PATCH', body: JSON.stringify(patch) }),
  // CASHBOOK
  insertCash: (data) =>
    sbFetch('/cashbook', { method: 'POST', body: JSON.stringify(data) })
};

// Upload su Storage via API REST
export async function uploadToStorage(fileName, bytes) {
  const url = `${SUPABASE_URL}/storage/v1/object/media/${encodeURIComponent(fileName)}`;
  const r = await fetch(url, {
    method: 'PUT',
    headers: {
      apikey: SERVICE_ROLE,
      Authorization: `Bearer ${SERVICE_ROLE}`,
      'Content-Type': 'application/octet-stream',
      'x-upsert': 'true'
    },
    body: bytes
  });
  if (!r.ok) throw new Error(await r.text());
  return `${SUPABASE_URL}/storage/v1/object/public/media/${encodeURIComponent(fileName)}`;
}
