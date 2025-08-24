// lib/jindi.js
import { useState } from 'react';

export function useJindi() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Ciao! Sono Jindi 👋🏼 Posso generare esempi, workout e dati per grafici.' },
  ]);
  const [loading, setLoading] = useState(false);
  const [lastChart, setLastChart] = useState(null);

  async function ask(text) {
    const userMsg = { role: 'user', content: text };
    setMessages(m => [...m, userMsg]);
    setLoading(true);
    setLastChart(null);
    try {
      const res = await fetch('/api/jindi', {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      const content = data?.text || data?.content || 'Nessuna risposta.';
      setMessages(m => [...m, { role: 'assistant', content }]);
      if (data?.chart) setLastChart(data.chart);
    } catch (e) {
      setMessages(m => [...m, { role: 'assistant', content: 'Errore: ' + e.message }]);
    } finally {
      setLoading(false);
    }
  }

  function clear() {
    setMessages([{ role: 'assistant', content: 'Chat svuotata. In cosa posso aiutarti ora?' }]);
    setLastChart(null);
  }

  return { messages, ask, clear, loading, lastChart };
}
