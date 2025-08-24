// lib/jindi.js
import { useState } from 'react';

// Qui in futuro collegherai il tuo backend/SDK dell'AI.
// Mantengo la stessa API del client in modo che tu possa
// sostituire l’implementazione senza toccare i componenti.
export function useJindi() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Ciao! Sono Jindi. Posso creare esempi, workout e grafici per le tue sezioni ✨' }
  ]);

  async function ask(text) {
    setMessages(m => [...m, { role: 'user', content: text }]);
    // Placeholder di “ragionamento”
    const reply = await fakeBrain(text);
    setMessages(m => [...m, { role: 'assistant', content: reply }]);
  }

  function clear() { setMessages([{ role: 'assistant', content: 'Chat svuotata. In cosa posso aiutarti ora?' }]); }

  return { messages, ask, clear };
}

async function fakeBrain(input) {
  await new Promise(r => setTimeout(r, 300)); // finta latenza
  if (/workout|allen/i.test(input))
    return 'Ecco un workout settimanale: Lun HIIT 20’, Mar Push 30’, Mer Mobilità 15’, Gio Pull 30’, Ven Core 20’, Sab Cardio 30’, Dom Riposo.';
  if (/esempi|idee|sezione/i.test(input))
    return '5 idee: 1) “Camminata 10k passi” 2) “Bere 2L acqua” 3) “Chiamare un amico” 4) “10’ meditazione” 5) “Leggere 15 pagine”.';
  if (/grafico|trend|stat/i.test(input))
    return 'Disegnerò un grafico con progressi settimanali (in arrivo, devo essere collegata al motore grafici).';
  return 'Ricevuto. Posso generare esempi per qualunque sezione, creare workout settimanali e preparare i grafici quando sarò collegata al backend.';
}
