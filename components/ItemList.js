// components/ItemList.js
import { useState } from 'react';
import { useStore } from '../lib/store';

export default function ItemList({ section, fields, title, hint='Tutte le voci sono elencate una sotto l’altra • Usa “Elimina” per rimuovere'}) {
  const { add, remove, all } = useStore();
  const [form, setForm] = useState({});
  const list = all[section] || [];
  function update(n,v){ setForm(p=>({ ...p, [n]: v })); }

  return (
    <div className="card">
      {title && <h3 className="card-title">{title}</h3>}
      <div className="grid">
        {fields.map(f => (
          <input key={f.name} value={form[f.name]||''} onChange={e=>update(f.name, e.target.value)} placeholder={f.placeholder||f.label}/>
        ))}
      </div>
      <button className="btn" onClick={()=>{ if(!fields.some(f=>(form[f.name]||'').trim())) return; add(section, form); setForm({}); }}>Aggiungi</button>
      <div className="hint">{hint}</div>
      {list.length === 0 ? <div className="empty">Nessuna voce ancora.</div> : (
        <ul className="list">{list.map(item =>
          <li key={item.id}>
            <div className="meta">{fields.map(f => item[f.name] ? <div key={f.name}><strong>{f.label}:</strong> {item[f.name]}</div> : null)}</div>
            <button className="del" onClick={()=>remove(section,item.id)}>Elimina</button>
          </li>
        )}</ul>
      )}
      <style jsx>{`
        .card{ border:1px solid #2a2a2a; border-radius:16px; padding:16px; margin:16px 0; background:#0f0f11; }
        .card-title{ margin:0 0 12px }
        .grid{ display:grid; gap:10px; grid-template-columns: 1fr; }
        input{ background:#151515; border:1px solid #333; border-radius:10px; padding:10px }
        .btn{ margin-top:10px; padding:10px 14px; border-radius:10px; border:1px solid #333; background:#1a1a1a }
        .hint{ opacity:.7; margin:10px 0; font-size:.9rem }
        .empty{ opacity:.7; padding:8px 0 }
        .list{ display:flex; flex-direction:column; gap:10px; margin:12px 0 0; padding:0; list-style:none }
        li{ display:flex; justify-content:space-between; gap:10px; border:1px solid #262626; padding:10px; border-radius:10px }
        .del{ background:#1b1316; border:1px solid #443; color:#f7c; padding:8px 10px; border-radius:10px }
      `}</style>
    </div>
  );
}
