import Layout from '../components/Layout';
import ListSection from '../components/ListSection';

export default function Fitness(){
  return (
    <Layout>
      <div className="card"><h2 style={{margin:0}}>💪🏼 Fitness & Salute</h2></div>

      <ListSection title="😴 Ore di sonno"
        fields={[
          {key:'data',label:'Data (opzionale)'},
          {key:'ore',label:'Ore dormite'},
          {key:'qualita',label:'Qualità (profondo/leggero)'},
          {key:'dolori',label:'Dolori al risveglio? Dove?'}
        ]}
      />

      <ListSection title="🍽️ Nutrizione & Kcal"
        fields={[
          {key:'pasto',label:'Pasto (colazione/spuntino/pranzo/cena)'},
          {key:'descr',label:'Cibo/porzione'},
          {key:'kcal',label:'Kcal (stima)'}
        ]}
      />

      <ListSection title="💊 Integratori / farmaci"
        fields={[
          {key:'nome',label:'Nome'},
          {key:'descr',label:'Come influenza la quotidianità (AI in futuro)'}
        ]}
      />

      <ListSection title="🤸🏼 Stretching / Mobilità"
        fields={[
          {key:'sessione',label:'Sessione'},
          {key:'descr',label:'Note / Vacuum / mobilità'}
        ]}
      />

      <ListSection title="🏋🏼‍♀️ Workout"
        allowPercent={true}
        fields={[
          {key:'giorno',label:'Giorno / Split'},
          {key:'esercizi',label:'Esercizi & serie', type:'textarea'},
          {key:'stima',label:'Kcal bruciate (stima)'}
        ]}
      />

      <ListSection title="💧 Idratazione" fields={[{key:'litri',label:'Litri oggi'}]} />
      <ListSection title="🚭 Sigarette" fields={[{key:'n',label:'N° sigarette oggi'}]} />
      <ListSection title="🍷 Alcol" fields={[{key:'n',label:'Bevande alcoliche oggi'}]} />

      <ListSection title="🩺 Visite mediche (promemoria)"
        fields={[
          {key:'tipo',label:'Tipo visita/analisi'},
          {key:'quando',label:'Scadenza / Appuntamento'},
          {key:'luogo',label:'Luogo'}
        ]}
      />

      <ListSection title="📈 Trend corporei"
        fields={[
          {key:'peso',label:'Peso'},
          {key:'grassa',label:'Massa grassa %'},
          {key:'muscolo',label:'Massa muscolare %'}
        ]}
      />

      <ListSection title="⚡ Energia giornaliera"
        allowPercent={true}
        fields={[
          {key:'descr',label:'Come ti senti'},
          {key:'percent',label:'Livello energia %'}
        ]}
      />

      <div className="card">
        <div className="row">
          <span className="chip">🔥 Giorni di riposo (AI)</span>
          <span className="chip">📱 Sincronizzazione device</span>
          <span className="chip">🍎 Suggerimenti pasti (AI)</span>
          <span className="chip">📊 Report settimanali</span>
        </div>
        <div className="meta" style={{marginTop:8}}>
          Le integrazioni AI/device saranno collegate quando abiliterai le chiavi (Apple Health/Google Fit, modelli AI).
        </div>
      </div>
    </Layout>
  );
}
