import { useState } from 'react';

function pct(v){ const n = Math.max(0, Math.min(100, Number(v)||0)); return n; }

export default function ListSection({
  title, // titolo blocco
  fields, // [{key:'descr', label:'Descrizione'}, {key:'start', label:'Inizio', type:'time'}, ...]
  allowPercent=false, // mostra slider %
  allowDone=true // mostra bottone ✅
}) {
  const [items,setItems] = useState([]);
  const [draft,setDraft] = useState(Object.fromEntries(fields.map(f=>[f.key,''])));

  function add(){
    const base = { id: crypto.randomUUID(), done:false, percent:0, createdAt: Date.now() };
    const filled = {...base, ...draft};
    // validazione minima: richiedi almeno un campo non vuoto
    if(Object.values(draft).join('').trim()==='') return;
    setItems([filled, ...items]);
    setDraft(Object.fromEntries(fields.map(f=>[f.key,''])));
  }
  function toggle(id){ setItems(items.map(it=> it.id===id ? {...it, done: !it.done } : it)); }
  function setPercent(id,v){ setItems(items.map(it=> it.id===id ? {...it, percent: pct(v)} : it)); }
  function remove(id){ setItems(items.filter(it=> it.id!==id)); }

  return (
    <section className="card">
      <h3 style={{marginTop:0}}>{title}</h3>

      {/* form inserimento */}
      <div className="row">
        {fields.map(f => (
          f.type==='textarea' ? (
            <textarea key={f.key} className="textarea" rows={3}
              placeholder={f.label}
              value={draft[f.key]} onChange={e=>setDraft({...draft,[f.key]: e.target.value})} />
          ) : (
            <input key={f.key} className="input" type={f.type||'text'}
              placeholder={f.label}
              value={draft[f.key]} onChange={e=>setDraft({...draft,[f.key]: e.target.value})}/>
          )
        ))}
      </div>

      <div className="row" style={{marginTop:8}}>
        <button className="btn" onClick={add}>Aggiungi</button>
        <span className="chip">Tutte le voci sono elencate una sotto l’altra • Usa “Elimina” per rimuovere</span>
      </div>

      <hr className="sep"/>

      {/* lista elementi */}
      {items.length===0 && <div className="meta">Nessuna voce ancora.</div>}
      {items.map(it => (
        <div className="item" key={it.id}>
          {allowDone && (
            <button className="btn-ghost" onClick={()=>toggle(it.id)}>
              {it.done ? '✅' : '⬜️'}
            </button>
          )}
          <div className="grow">
            {fields.map(f => (
              <div key={f.key} style={{marginBottom:2}}>
                <b>{f.label}:</b> <span>{String(it[f.key]||'—')}</span>
              </div>
            ))}
            <div className="meta">Creato: {new Date(it.createdAt).toLocaleString()}</div>
            {allowPercent && (
              <div className="row" style={{alignItems:'center', marginTop:6}}>
                <input className="input" type="number" min={0} max={100}
                  value={it.percent} onChange={e=>setPercent(it.id, e.target.value)} />
                <span className="chip">{it.percent}%</span>
              </div>
            )}
          </div>
          <button className="btn-ghost" onClick={()=>remove(it.id)}>Elimina</button>
        </div>
      ))}
    </section>
  );
}
