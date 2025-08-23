import Section from "@/components/Section";
import ListManager from "@/components/ListManager";

export default function Fitness(){
  return (
    <>
      <h1 className="h1">MINDflow</h1>
      <div className="subtitle">Fitness & Salute</div>

      <Section title="😴 Ore & Qualità del sonno" emoji="😴">
        <ListManager storeKey="sonno" placeholder="Nota"
          extraFields={[
            {name:"ore", placeholder:"Ore", type:"number"},
            {name:"qualita", placeholder:"Qualità (profondo/leggero)"},
            {name:"dolori", placeholder:"Dolori al risveglio? Dove?"}
          ]}/>
      </Section>

      <Section title="🍽️ Nutrizione & kcal" emoji="🍽️">
        <ListManager storeKey="pasti" placeholder="Pasto (colazione/spuntino/pranzo/cena...)"
          extraFields={[
            {name:"kcal", placeholder:"kcal stimate", type:"number"}
          ]}/>
      </Section>

      <Section title="💊 Integratori" emoji="💊">
        <ListManager storeKey="integratori" placeholder="Integratore/farmaco"
          extraFields={[{name:"note", placeholder:"Spiegazione/effetto (AI)"}]}/>
      </Section>

      <Section title="🤸 Mobilità / Stretching" emoji="🤸">
        <ListManager storeKey="stretch" placeholder="Esercizio"
          extraFields={[{name:"durata", placeholder:"Durata (min)"}]}/>
      </Section>

      <Section title="🏋️ Workout" emoji="🏋️">
        <ListManager storeKey="workout" placeholder="Esercizio"
          extraFields={[
            {name:"serie", placeholder:"Serie x Ripetizioni"},
            {name:"kcal", placeholder:"kcal stimate", type:"number"}
          ]}/>
      </Section>

      <Section title="💧 Idratazione" emoji="💧">
        <ListManager storeKey="acqua" placeholder="Bicchieri/bottiglie bevute"/>
      </Section>

      <Section title="🚭 Sigarette" emoji="🚭">
        <ListManager storeKey="sigarette" placeholder="Numero di sigarette" />
      </Section>

      <Section title="🍷 Alcol" emoji="🍷">
        <ListManager storeKey="alcol" placeholder="Unità alcoliche" />
      </Section>

      <Section title="🩺 Visite mediche" emoji="🩺">
        <ListManager storeKey="visite" placeholder="Tipo visita"
          extraFields={[
            {name:"dove", placeholder:"Dove"},
            {name:"quando", placeholder:"Scadenza", type:"date"}
          ]}/>
      </Section>

      <Section title="📈 Trend corporei" emoji="📈">
        <ListManager storeKey="trend" placeholder="Misura"
          extraFields={[
            {name:"peso", placeholder:"Peso (kg)"},
            {name:"grassa", placeholder:"% massa grassa"},
            {name:"muscolo", placeholder:"% massa muscolare"}
          ]}/>
      </Section>
    </>
  );
}
