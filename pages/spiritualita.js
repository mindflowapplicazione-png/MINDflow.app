import Layout from '../components/Layout';
import ListSection from '../components/ListSection';

export default function Spiritualita(){
  return (
    <Layout>
      <div className="card"><h2 style={{margin:0}}>🔮 Spiritualità & Crescita</h2></div>

      <ListSection title="🧘🏼‍♀️ Meditazione guidata / tue registrazioni"
        fields={[
          {key:'tipo',label:'Tipo (guidata / tuo audio)'},
          {key:'durata',label:'Durata min'},
          {key:'file',label:'URL audio (provvisorio)'},
          {key:'volte',label:'Quante volte oggi'}
        ]}
      />

      <ListSection title="🪐 Astrologia (dati base)"
        fields={[
          {key:'data',label:'Data di nascita'},
          {key:'ora',label:'Ora di nascita'},
          {key:'luogo',label:'Luogo'}
        ]}
      />

      <ListSection title="🃏 Tarocchi / Arcani"
        fields={[
          {key:'metodo',label:'Metodo (nascita/anima/anno)'},
          {key:'valore',label:'Numero / Arcano'},
          {key:'note',label:'Note', type:'textarea'}
        ]}
      />

      <ListSection title="🔢 Numerologia"
        fields={[
          {key:'destino',label:'Numero del destino'},
          {key:'anima',label:'Numero dell’anima'},
          {key:'personalita',label:'Numero della personalità'}
        ]}
      />

      <ListSection title="✡️ Kabbalah / Gematria"
        fields={[
          {key:'nome',label:'Nome (latinizzato)'},
          {key:'somma',label:'Somma / Gematria'},
          {key:'interpret',label:'Interpretazione', type:'textarea'}
        ]}
      />

      <ListSection title="☯️ I Ching"
        fields={[
          {key:'esagramma',label:'Esagramma (1–64)'},
          {key:'mutazioni',label:'Linee mobili (opz.)'},
          {key:'testo',label:'Insegnamento', type:'textarea'}
        ]}
      />

      <ListSection title="ᚱ Rune"
        fields={[
          {key:'runa',label:'Runa (nome/simbolo)'},
          {key:'metodo',label:'Divinazione / numero / meditazione'},
          {key:'signif',label:'Significato', type:'textarea'}
        ]}
      />

      <ListSection title="🌱 Energia, chakra e pratiche"
        fields={[
          {key:'bilancio',label:'Chakra / squilibrio'},
          {key:'esercizi',label:'Esercizi consigliati', type:'textarea'}
        ]}
      />

      <ListSection title="🕯️ Rituali & mistica"
        fields={[
          {key:'nome',label:'Nome rituale'},
          {key:'descr',label:'Descrizione', type:'textarea'},
          {key:'passi',label:'Passaggi', type:'textarea'},
          {key:'esito',label:'Come ti sei sentito'}
        ]}
      />

      <ListSection title="📿 Sogni"
        fields={[
          {key:'descr',label:'Descrizione sogno', type:'textarea'},
          {key:'sign',label:'Significato (AI in futuro)'}
        ]}
      />

      <ListSection title="🎨 Creatività & Hobby"
        fields={[
          {key:'idea',label:'Idea/attività'},
          {key:'note',label:'Note / ispirazioni', type:'textarea'}
        ]}
      />

      <ListSection title="🎞️ Watchlist"
        fields={[
          {key:'titolo',label:'Titolo'},
          {key:'descr',label:'Descrizione (AI senza spoiler in futuro)'}
        ]}
      />

      <ListSection title="🔥 Manifestazione & Legge di attrazione"
        fields={[
          {key:'desiderio',label:'Desiderio/obiettivo'},
          {key:'passi',label:'Passi pianificati', type:'textarea'}
        ]}
      />
    </Layout>
  );
}
