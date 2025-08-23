import Section from "@/components/Section";
import ListManager from "@/components/ListManager";

export default function Carriera(){
  return (
    <>
      <h1 className="h1">MINDflow</h1>
      <div className="subtitle">Carriera & Mindset</div>

      <Section title="⚠️ Priorità del giorno (max 5)" emoji="⚠️">
        <ListManager storeKey="prio_giorno"
          placeholder="Priorità..."
          extraFields={[
            {name:"percentuale", placeholder:"% importanza", type:"number", default:""}
          ]}/>
      </Section>

      <Section title="🥇 Obiettivo principale" emoji="🥇">
        <ListManager storeKey="goal_main" placeholder="Obiettivo..." />
      </Section>

      <Section title="🥈 Mini obiettivi" emoji="🥈">
        <ListManager storeKey="goal_mini" placeholder="Mini obiettivo..." />
      </Section>

      <Section title="📆 Daily Planner" emoji="📆">
        <ListManager storeKey="daily_planner" placeholder="Azione + descrizione"
          extraFields={[
            {name:"inizio", placeholder:"Inizio (hh:mm)", type:"time"},
            {name:"fine",   placeholder:"Fine (hh:mm)",   type:"time"}
          ]}/>
      </Section>

      <Section title="🗒️ Note rapide" emoji="🗒️">
        <ListManager storeKey="note_rapide" placeholder="Nota..."
          extraFields={[
            {name:"orario", placeholder:"Orario", type:"time"}
          ]}/>
      </Section>

      <Section title="💼 Meeting" emoji="💼">
        <ListManager storeKey="meeting" placeholder="Nome persona + descrizione"
          extraFields={[
            {name:"link", placeholder:"Link riunione (https://)"},
            {name:"orario", placeholder:"Orario", type:"time"}
          ]}/>
      </Section>

      <Section title="📸 Cosa ti ha colpito oggi?" emoji="📸">
        <ListManager storeKey="colpito_oggi" placeholder="Commento/descrizione"/>
      </Section>

      <Section title="🚀 Sfide personali" emoji="🚀">
        <ListManager storeKey="sfide" placeholder="Azione"
          extraFields={[
            {name:"descrizione", placeholder:"Descrizione"},
            {name:"durata", placeholder:"Durata (min)"},
            {name:"progress", placeholder:"% raggiungimento", type:"number"}
          ]}/>
      </Section>

      <Section title="💰 Bilancio giornaliero" emoji="💰">
        <ListManager storeKey="bilancio" placeholder="Entrata/uscita + descrizione"
          extraFields={[
            {name:"importo", placeholder:"€ (+/-)"},
          ]}/>
        <ListManager storeKey="risparmio" placeholder="Challenge risparmio"
          extraFields={[
            {name:"euro", placeholder:"€ risparmiati oggi"}
          ]}/>
      </Section>

      <Section title="🛍️ Cose da comprare" emoji="🛍️">
        <ListManager storeKey="shopping" placeholder="Oggetto"
          extraFields={[{name:"dove", placeholder:"Dove comprarlo"}]}/>
      </Section>

      <Section title="🧽 Faccende domestiche" emoji="🧽">
        <ListManager storeKey="faccende" placeholder="Faccenda..."/>
      </Section>

      <Section title="📲 Email / chiamate da fare" emoji="📲">
        <ListManager storeKey="contatti" placeholder="Nome"
          extraFields={[
            {name:"contatto", placeholder:"email o tel."},
            {name:"descrizione", placeholder:"Descrizione"}
          ]}/>
      </Section>

      <Section title="⏰ Scadenze importanti" emoji="⏰">
        <ListManager storeKey="scadenze" placeholder="Titolo"
          extraFields={[
            {name:"descrizione", placeholder:"Descrizione"},
            {name:"quando", placeholder:"Quando", type:"date"}
          ]}/>
      </Section>

      <Section title="💭 Pensieri del giorno" emoji="💭">
        <ListManager storeKey="pensieri" placeholder="Descrizione"
          extraFields={[{name:"percentuale", placeholder:"% quanto ci hai pensato", type:"number"}]}/>
      </Section>

      <Section title="🤔 Riflessione serale" emoji="🤔">
        <ListManager storeKey="riflessione" placeholder="Scrivi la riflessione..." />
      </Section>
    </>
  );
}
