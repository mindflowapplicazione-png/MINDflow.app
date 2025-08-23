import Layout from '../components/Layout';
import ListSection from '../components/ListSection';

export default function Emozioni(){
  return (
    <Layout>
      <div className="card"><h2 style={{margin:0}}>🩷 Emozioni</h2></div>

      <ListSection title="📊 Tracker umore"
        allowPercent={true}
        fields={[
          {key:'ora',label:'Orario', type:'time'},
          {key:'umore',label:'Umore (😭☹️😑🙂🥰)'},
          {key:'intens',label:'Intensità %'},
          {key:'trigger',label:'Trigger emotivo ⁉️'},
          {key:'influenza',label:'Quanto influenza la vita %'},
          {key:'dipende',label:'Quanto dipende da me %'},
          {key:'soluzione',label:'Cosa fare per risolvere', type:'textarea'}
        ]}
      />

      <ListSection title="🙏🏼 Gratitudine (1/2/3/4/5)"
        allowPercent={true}
        fields={[
          {key:'voce',label:'Voce di gratitudine'},
          {key:'descr',label:'Descrizione'},
          {key:'percent',label:'% gratitudine'}
        ]}
      />

      <ListSection title="✨ Self-care del giorno"
        fields={[
          {key:'rituale',label:'Nome rituale'},
          {key:'passi',label:'Passaggi (step by step)', type:'textarea'},
          {key:'esito',label:'Come mi sento alla fine'}
        ]}
      />

      <div className="card">
        <div className="row">
          <span className="chip">🧘‍♀️ Sessioni Mindfulness (timer, respirazione)</span>
          <span className="chip">📈 Obiettivi Emotivi</span>
          <span className="chip">🌙 Sonno & Umore</span>
          <span className="chip">☁️ Backup Cloud</span>
        </div>
        <div className="meta" style={{marginTop:8}}>
          Queste funzionalità avanzate (grafici AI, reminder, upload file/audio) verranno collegate ai servizi cloud quando attivi le chiavi.
        </div>
      </div>
    </Layout>
  );
}
