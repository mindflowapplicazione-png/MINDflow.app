// components/FabJindi.js
import { useState, useRef, useEffect } from 'react';
import { useJindi } from '../lib/jindi';

export default function FabJindi() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const { ask, messages, clear, loading } = useJindi();
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, loading, open]);

  return (
    <>
      <button className="fab" onClick={() => setOpen(!open)} aria-label="Chat con Jindi">
        👋🏼
      </button>

      {open && (
        <div className="panel">
          <div className="panel-header">
            <strong>Jindi</strong>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="link" onClick={clear}>Svuota</button>
              <button className="link" onClick={() => setOpen(false)}>Chiudi</button>
            </div>
          </div>

          <div ref={listRef} className="messages">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'bubble me' : 'bubble ai'}>
                {m.content}
              </div>
            ))}
            {loading && <div className="bubble ai">Sto pensando…</div>}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!msg.trim() || loading) return;
              ask(msg.trim());
              setMsg('');
            }}
          >
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Scrivi a Jindi… (es. “creami un workout settimanale”)"
            />
            <button type="submit" className="send" disabled={loading}>
              {loading ? '...' : 'Invia'}
            </button>
          </form>
        </div>
      )}

      <style jsx>{`
        .fab {
          position: fixed; right: 18px; bottom: 18px; z-index: 50;
          width: 58px; height: 58px; border-radius: 50%;
          border: 1px solid #333; background: #1a1a1a;
        }
        .panel {
          position: fixed; right: 18px; bottom: 86px; width: min(440px, 92vw);
          background: #0e0e10; border: 1px solid #333; border-radius: 14px;
          display:flex; flex-direction:column; max-height: 70vh; overflow:hidden;
        }
        .panel-header { display:flex; gap:10px; align-items:center;
          justify-content:space-between; padding:10px 12px; border-bottom:1px solid #222; }
        .link { background:none; border:none; color:#a0a0ff; cursor:pointer; }
        .messages { padding:12px; overflow:auto; display:flex; flex-direction:column; gap:8px; }
        .bubble { padding:10px 12px; border-radius:12px; max-width:85%; white-space:pre-wrap; }
        .me { align-self:flex-end; background:#2a2a36; }
        .ai { align-self:flex-start; background:#16161a; border:1px solid #262626; }
        form { display:flex; gap:8px; padding:10px; border-top:1px solid #222; }
        input { flex:1; background:#151515; border:1px solid #333; border-radius:10px; padding:10px; }
        .send { padding:10px 14px; border-radius:10px; border:1px solid #333; background:#1a1a1a; }
      `}</style>
    </>
  );
}
