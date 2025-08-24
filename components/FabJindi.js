// components/FabJindi.js
import { useEffect, useRef, useState } from 'react';
import { useJindi } from '../lib/jindi';
import Chart from './Chart';

export default function FabJindi() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const { ask, messages, clear, loading, lastChart } = useJindi();
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, loading, open]);

  return (
    <>
      <button className="fab" onClick={() => setOpen(o => !o)} aria-label="Chat con Jindi">👋🏼</button>
      {open && (
        <div className="panel">
          <div className="hdr">
            <strong>Jindi</strong>
            <div className="hdr-actions">
              <button className="link" onClick={clear}>Svuota</button>
              <button className="link" onClick={() => setOpen(false)}>Chiudi</button>
            </div>
          </div>

          <div ref={listRef} className="msgs">
            {messages.map((m, i) =>
              <div key={i} className={m.role === 'user' ? 'me' : 'ai'}>{m.content}</div>
            )}
            {loading && <div className="ai">Sto pensando…</div>}
            {lastChart && (
              <div className="chartBox">
                <Chart data={lastChart} />
              </div>
            )}
          </div>

          <form onSubmit={(e)=>{e.preventDefault(); if(!msg.trim() || loading) return; ask(msg.trim()); setMsg('');}}>
            <input value={msg} onChange={e=>setMsg(e.target.value)} placeholder='Chiedi es: "grafico attività settimanali"' />
            <button disabled={loading}>{loading ? '...' : 'Invia'}</button>
          </form>
        </div>
      )}

      <style jsx>{`
        .fab{position:fixed;right:18px;bottom:18px;z-index:50;width:58px;height:58px;border-radius:50%;
          border:1px solid #333;background:#1a1a1a;}
        .panel{position:fixed;right:18px;bottom:86px;width:min(440px,92vw);background:#0e0e10;border:1px solid #333;border-radius:14px;
          display:flex;flex-direction:column;max-height:72vh;overflow:hidden}
        .hdr{display:flex;justify-content:space-between;align-items:center;padding:10px 12px;border-bottom:1px solid #222}
        .hdr-actions{display:flex;gap:8px}
        .link{background:none;border:none;color:#a0a0ff;cursor:pointer}
        .msgs{padding:12px;overflow:auto;display:flex;flex-direction:column;gap:8px}
        .me,.ai{padding:10px 12px;border-radius:12px;max-width:85%;white-space:pre-wrap}
        .me{align-self:flex-end;background:#2a2a36}
        .ai{align-self:flex-start;background:#16161a;border:1px solid #262626}
        .chartBox{background:#111;border:1px solid #262626;border-radius:10px;padding:10px}
        form{display:flex;gap:8px;padding:10px;border-top:1px solid #222}
        input{flex:1;background:#151515;border:1px solid #333;border-radius:10px;padding:10px}
        button{padding:10px 14px;border-radius:10px;border:1px solid #333;background:#1a1a1a}
      `}</style>
    </>
  );
}
