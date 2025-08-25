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
        .fab {
          position: fixed;
          right: 20px;
          bottom: 20px;
          z-index: 1000;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, var(--accent-orange), var(--accent-pink));
          color: white;
          font-size: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }
        
        .fab:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 12px 40px rgba(0,0,0,0.5);
        }
        
        .panel {
          position: fixed;
          right: 20px;
          bottom: 96px;
          width: min(400px, calc(100vw - 40px));
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          max-height: 70vh;
          overflow: hidden;
          box-shadow: var(--shadow);
          z-index: 999;
        }
        
        .hdr {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          border-bottom: 1px solid var(--border);
          background: var(--bg);
          border-radius: 20px 20px 0 0;
        }
        
        .hdr strong {
          color: var(--fg);
          font-size: 18px;
          font-weight: 600;
        }
        
        .hdr-actions {
          display: flex;
          gap: 12px;
        }
        
        .link {
          background: none;
          border: none;
          color: var(--accent-blue);
          cursor: pointer;
          font-size: 14px;
          padding: 4px 8px;
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        
        .link:hover {
          background: var(--border);
        }
        
        .msgs {
          padding: 16px;
          overflow: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
          min-height: 200px;
        }
        
        .me, .ai {
          padding: 12px 16px;
          border-radius: 16px;
          max-width: 85%;
          white-space: pre-wrap;
          font-size: 14px;
          line-height: 1.4;
        }
        
        .me {
          align-self: flex-end;
          background: var(--accent-blue);
          color: white;
        }
        
        .ai {
          align-self: flex-start;
          background: var(--bg);
          border: 1px solid var(--border);
          color: var(--fg);
        }
        
        .chartBox {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 16px;
          margin: 8px 0;
        }
        
        form {
          display: flex;
          gap: 12px;
          padding: 16px;
          border-top: 1px solid var(--border);
          background: var(--bg);
          border-radius: 0 0 20px 20px;
        }
        
        input {
          flex: 1;
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 12px 16px;
          color: var(--fg);
          font-size: 14px;
        }
        
        input::placeholder {
          color: var(--fg-secondary);
        }
        
        input:focus {
          outline: none;
          border-color: var(--accent-blue);
        }
        
        button {
          padding: 12px 20px;
          border-radius: 12px;
          border: none;
          background: var(--accent-blue);
          color: white;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 14px;
        }
        
        button:hover:not(:disabled) {
          background: var(--accent-purple);
          transform: translateY(-1px);
        }
        
        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        @media (max-width: 768px) {
          .fab {
            width: 56px;
            height: 56px;
            right: 16px;
            bottom: 16px;
            font-size: 20px;
          }
          
          .panel {
            right: 16px;
            bottom: 84px;
            width: calc(100vw - 32px);
            max-height: 65vh;
          }
          
          .hdr {
            padding: 12px 16px;
          }
          
          .hdr strong {
            font-size: 16px;
          }
          
          .msgs {
            padding: 12px;
            min-height: 150px;
          }
          
          .me, .ai {
            padding: 10px 12px;
            font-size: 13px;
          }
          
          form {
            padding: 12px;
            gap: 8px;
          }
          
          input {
            padding: 10px 12px;
            font-size: 13px;
          }
          
          button {
            padding: 10px 16px;
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
}
