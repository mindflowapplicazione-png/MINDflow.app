// pages/profilo.js
import Layout from '../components/Layout';
import ItemList from '../components/ItemList';

export default function Profilo() {
  return (
    <Layout title="Profilo">
      <ItemList
        section="priorita"
        title="🗒️ Planner quotidiano"
        fields={[
          { name: 'title', label: 'Priorità', placeholder: 'Es. Studiare inglese' },
          { name: 'desc', label: 'Descrizione' },
          { name: 'pct',  label: '% importanza (0–100)', placeholder: '70' },
        ]}
      />

      <ItemList
        section="main_goal"
        title="🥇 Obiettivo principale"
        fields={[
          { name: 'goal', label: 'Obiettivo' },
          { name: 'desc', label: 'Descrizione' },
          { name: 'due',  label: 'Scadenza (opzionale)' },
        ]}
      />

      <ItemList
        section="mini_goals"
        title="🥈 Mini obiettivi"
        fields={[
          { name: 'title', label: 'Mini obiettivo' },
          { name: 'desc',  label: 'Descrizione' },
        ]}
      />

      <ItemList
        section="daily_planner"
        title="📅 Daily Planner"
        fields={[
          { name: 'action', label: 'Azione' },
          { name: 'desc',   label: 'Descrizione' },
          { name: 'note',   label: 'Note (opz.)' },
        ]}
      />

      <ItemList
        section="quick_notes"
        title="🗒️ Note rapide"
        fields={[
          { name: 'title', label: 'Nota' },
          { name: 'desc',  label: 'Descrizione' },
        ]}
      />

      <ItemList
        section="meetings"
        title="💼 Meeting"
        fields={[
          { name: 'who',  label: 'Meeting / Persona' },
          { name: 'desc', label: 'Descrizione' },
          { name: 'link', label: 'Link (Zoom/Meet)' },
        ]}
      />

      <ItemList
        section="what_struck_you"
        title="📸 Cosa ti ha colpito oggi?"
        fields={[
          { name: 'url',  label: 'URL file/foto/audio' },
          { name: 'desc', label: 'Commento/descrizione' },
        ]}
      />

      <ItemList
        section="personal_challenges"
        title="🚀 Sfide personali"
        fields={[
          { name: 'action', label: 'Azione' },
          { name: 'desc',   label: 'Descrizione' },
          { name: 'dur',    label: 'Durata (es. 30 min)' },
        ]}
      />

      <ItemList
        section="daily_budget"
        title="💰 Bilancio giornaliero + challenge risparmio"
        fields={[
          { name: 'amount', label: 'Entrata/Uscita (+/- importo)' },
          { name: 'desc',   label: 'Descrizione' },
          { name: 'challenge', label: 'Challenge risparmio (facolt.)' },
        ]}
      />

      <ItemList
        section="shopping"
        title="🛍️ Cose da comprare"
        fields={[
          { name: 'what',  label: 'Cosa' },
          { name: 'where', label: 'Dove comprarla' },
        ]}
      />

      <ItemList
        section="household"
        title="🧽 Faccende domestiche"
        fields={[
          { name: 'task', label: 'Attività di casa' },
        ]}
      />

      <ItemList
        section="calls"
        title="📞 Email / chiamate da fare"
        fields={[
          { name: 'name',  label: 'Nome' },
          { name: 'contact', label: 'Email o telefono' },
          { name: 'desc',  label: 'Descrizione' },
        ]}
      />

      <ItemList
        section="deadlines"
        title="⏰ Scadenze importanti"
        fields={[
          { name: 'what', label: 'Scadenza' },
          { name: 'desc', label: 'Descrizione' },
          { name: 'when', label: 'Quando scade' },
        ]}
      />

      <ItemList
        section="tomorrow"
        title="🧱 Cose da fare per domani"
        fields={[
          { name: 'action', label: 'Attività' },
          { name: 'desc',   label: 'Descrizione' },
        ]}
      />

      <ItemList
        section="thoughts"
        title="💭 Pensieri del giorno"
        fields={[
          { name: 'desc', label: 'Descrizione' },
          { name: 'pct',  label: '% di quanto ci hai pensato' },
        ]}
      />

      <ItemList
        section="evening_reflection"
        title="🤔 Riflessione serale"
        fields={[
          { name: 'text', label: 'Riflessione' },
        ]}
      />
    </Layout>
  );
}
