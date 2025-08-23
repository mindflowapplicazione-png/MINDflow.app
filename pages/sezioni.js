import Layout from '../components/Layout';
import ListSection from '../components/ListSection';

export default function Sezioni(){
  return (
    <Layout>
      <div className="card"><h2 style={{margin:0}}>📋 Planner quotidiano</h2></div>

      <ListSection
        title="⚠️ Priorità del giorno (Max 5) – in ordine con percentuali"
        allowPercent={true}
        fields={[
          {key:'titolo', label:'Priorità'},
          {key:'descr', label:'Descrizione breve'},
          {key:'peso', label:'% importanza (0–100)'}
        ]}
      />

      <ListSection title="🥇 Obiettivo principale"
        allowPercent={true}
        fields={[{key:'titolo',label:'Obiettivo'},
                 {key:'descr',label:'Descrizione', type:'textarea'},
                 {key:'scadenza',label:'Scadenza (opzionale)'}]} />

      <ListSection title="🥈 Mini obiettivi"
        allowPercent={true}
        fields={[{key:'titolo',label:'Mini obiettivo'},
                 {key:'descr',label:'Descrizione'}]} />

      <ListSection title="📆 Daily Planner"
        allowDone={true}
        fields={[
          {key:'azione',label:'Azione'},
          {key:'descr',label:'Descrizione'},
          {key:'start',label:'Inizio', type:'time'},
          {key:'end',label:'Fine', type:'time'}
        ]}
      />

      <ListSection title="🗒️ Note rapide"
        allowDone={true}
        fields={[
          {key:'nota',label:'Nota'},
          {key:'descr',label:'Descrizione'},
          {key:'ora',label:'Orario', type:'time'}
        ]}
      />

      <ListSection title="💼 Meeting"
        allowDone={true}
        fields={[
          {key:'nome',label:'Meeting / Persona'},
          {key:'descr',label:'Descrizione'},
          {key:'link',label:'Link (Zoom/Meet)'}
        ]}
      />

      <ListSection title="📸 Cosa ti ha colpito oggi?"
        allowDone={false}
        fields={[
          {key:'file',label:'URL file/foto/audio (per ora)'},
          {key:'commento',label:'Commento/descrizione', type:'textarea'}
        ]}
      />

      <ListSection title="🚀 Sfide personali"
        allowPercent={true}
        fields={[
          {key:'azione',label:'Azione'},
          {key:'descr',label:'Descrizione'},
          {key:'durata',label:'Durata (es. 30 min)'}
        ]}
      />

      <ListSection title="💰 Bilancio giornaliero + challenge risparmio"
        allowPercent={false}
        fields={[
          {key:'mov',label:'Entrata/Uscita (+/- importo)'},
          {key:'descr',label:'Descrizione'},
          {key:'challenge',label:'Challenge di risparmio (facoltativa)'}
        ]}
      />

      <ListSection title="🛍️ Cose da comprare"
        fields={[
          {key:'voce',label:'Cosa'},
          {key:'dove',label:'Dove comprarla'}
        ]}
      />

      <ListSection title="🧽 Faccende domestiche"
        allowDone={true}
        fields={[{key:'voce',label:'Attività di casa'}]}
      />

      <ListSection title="📲 Email / chiamate da fare"
        allowDone={true}
        fields={[
          {key:'nome',label:'Nome'},
          {key:'contatto',label:'Email o telefono'},
          {key:'descr',label:'Descrizione'}
        ]}
      />

      <ListSection title="⏰ Scadenze importanti"
        allowDone={true}
        fields={[
          {key:'voce',label:'Scadenza'},
          {key:'descr',label:'Descrizione'},
          {key:'quando',label:'Quando scade'}
        ]}
      />

      <ListSection title="🧱 Cose da fare per domani"
        allowDone={true}
        fields={[{key:'voce',label:'Attività'}]}
      />

      <ListSection title="💭 Pensieri del giorno"
        allowPercent={true}
        fields={[
          {key:'descr',label:'Descrizione', type:'textarea'},
          {key:'percent',label:'% di quanto ci hai pensato'}
        ]}
      />

      <ListSection title="🤔 Riflessione serale"
        fields={[{key:'rifl',label:'Riflessione', type:'textarea'}]}
      />
    </Layout>
  );
}
