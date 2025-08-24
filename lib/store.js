// lib/store.js
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
const Ctx = createContext(null);

export function StoreProvider({ children }) {
  const [items, setItems] = useState(() => {
    if (typeof window === 'undefined') return {};
    try { return JSON.parse(localStorage.getItem('mf_items') || '{}'); } catch { return {}; }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('mf_items', JSON.stringify(items));
  }, [items]);

  const api = useMemo(() => ({
    all: items,
    add(section, entry) {
      const now = Date.now();
      const e = { id: `${section}-${now}`, ...entry, createdAt: now, section };
      setItems(prev => ({ ...prev, [section]: [e, ...(prev[section] || [])] }));
    },
    bulkAdd(section, entries) {
      const stamped = entries.map((en, i) => ({ id: `${section}-${Date.now()}-${i}`, ...en, section }));
      setItems(prev => ({ ...prev, [section]: [...stamped, ...(prev[section] || [])] }));
    },
    remove(section, id) { setItems(prev => ({ ...prev, [section]: (prev[section]||[]).filter(x=>x.id!==id) })); },
    clearSection(section) { setItems(prev => ({ ...prev, [section]: [] })); },
    clearAll() { setItems({}); }
  }), [items]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}
export function useStore(){ const v = useContext(Ctx); if(!v) throw new Error('useStore fuori da StoreProvider'); return v; }
