// lib/jindi.js
import { useState } from 'react';

export function useJindi() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Ciao! Sono Jindi 👋🏼 Posso creare esempi, workout e piani. Chiedimi pure!' },
  ]);
  const [loading, setLoading] = useState(false);

  async function ask(text) {
    const userMsg = { role: 'user', content: text };
    setMessages((m) => [...m, userMsg]);
    setLoading(true);
    try {
      const res = await fetch('/api/jindi', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      if (data?.content) {
        setMessages((m) => [...m, { role: 'assistant', content: data.content }]);
      } else if (data?.error) {
        setMessages((m) => [...m, { role: 'assistant', content: `Errore: ${data.error}` }]);
      }
    } catch (e) {
      setMessages((m) => [...m, { role: 'assistant', content: `Errore di rete: ${e.message}` }]);
    } finally {
      setLoading(false);
    }
  }

  function clear() {
    setMessages([{ role: 'assistant', content: 'Chat svuotata. In cosa posso aiutarti ora?' }]);
  }

  return { messages, ask, clear, loading };
}
