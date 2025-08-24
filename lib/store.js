// lib/store.js
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const StoreCtx = createContext(null);

export function StoreProvider({ children }) {
  const [items, setItems] = useState(() => {
    if (typeof window === 'undefined') return {};
    try { return JSON.parse(localStorage.getItem('mf_items') || '{}'); }
    catch { return {}; }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('mf_items', JSON.stringify(items));
    }
  }, [items]);

  const api = useMemo(() => ({
    all: items,
    add(section, entry) {
      setItems(prev => {
        const now = Date.now();
        const e = { id: `${section}-${now}`, ...entry, createdAt: now, section };
        const list = prev[section] ? [e, ...prev[section]] : [e];
        return { ...prev, [section]: list };
      });
    },
    remove(section, id) {
      setItems(prev => ({ ...prev, [section]: (prev[section]||[]).filter(x => x.id !== id) }));
    },
    clearSection(section) { setItems(prev => ({ ...prev, [section]: [] })); },
  }), [items]);

  return <StoreCtx.Provider value={api}>{children}</StoreCtx.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreCtx);
  if (!ctx) throw new Error('useStore must be used inside <StoreProvider/>');
  return ctx;
}
