import Section from "@/components/Section";
import ListManager from "@/components/ListManager";
import Uploader from "@/components/Uploader";

export default function Spiritualita(){
  return (
    <>
      <h1 className="h1">MINDflow</h1>
      <div className="subtitle">Spiritualità & Crescita</div>

      <Section title="🧘 Meditazione Guidata (10 min)" emoji="🧘">
        <ListManager storeKey="meditazioni" placeholder="Sessione"
          extraFields={[
            {name:"durata", placeholder:"Durata (min)", type:"number"},
            {name:"volte", placeholder:"Quante volte oggi", type:"number"}
          ]}/>
        <Uploader accept="audio/*" />
      </Section>

      <Section title="🪐 Astrologia (AI)" emoji="🪐">
        <ListManager storeKey="astrologia" placeholder="Dati (data/ora/luogo)"
          extraFields={[{name:"esito", placeholder:"Tema, transiti, rivoluzioni..."}]}/>
      </Section>

      <Section title="🃏 Tarocchi (AI)" emoji="🃏">
        <ListManager storeKey="tarocchi" placeholder="Metodo/Arcano"
          extraFields={[{name:"esito", placeholder:"Interpretazione"}]}/>
      </Section>

      <Section title="🔢 Numerologia (AI)" emoji="🔢">
        <ListManager storeKey="numerologia" placeholder="Dato (nome/data)"
          extraFields={[{name:"esito", placeholder:"Numero del destino / altro"}]}/>
      </Section>

      <Section title="✡️ Kabbalah / Albero della Vita" emoji="✡️">
        <ListManager storeKey="kabbalah" placeholder="Nome/valore"
          extraFields={[{name:"esito", placeholder:"Sephirot / Sentiero"}]}/>
      </Section>

      <Section title="☯️ I Ching" emoji="☯️">
        <ListManager storeKey="iching" placeholder="Domanda / lanci"
          extraFields={[{name:"esagramma", placeholder:"Esagramma + interpretazione"}]}/>
      </Section>

      <Section title="ᚱ Rune" emoji="ᚱ">
        <ListManager storeKey="rune" placeholder="Estrazione o numero"
          extraFields={[{name:"significato", placeholder:"Significato"}]}/>
      </Section>

      <Section title="🕯️ Rituali e mistica" emoji="🕯️">
        <ListManager storeKey="rituali" placeholder="Nome rituale"
          extraFields={[
            {name:"descrizione", placeholder:"Descrizione"},
            {name:"passaggi", placeholder:"Passaggi"},
            {name:"esito", placeholder:"Come ti sei sentito"}
          ]}/>
      </Section>

      <Section title="📿 Sogni (interpretazione AI)" emoji="📿">
        <ListManager storeKey="sogni" placeholder="Descrizione sogno"
          extraFields={[{name:"significato", placeholder:"Significato"}]}/>
      </Section>

      <Section title="🎞️ Watchlist + descrizione (AI)" emoji="🎞️">
        <ListManager storeKey="watchlist" placeholder="Titolo"
          extraFields={[{name:"descrizione", placeholder:"Descrizione"}]}/>
      </Section>

      <Section title="🔥 Manifestazione & LoA" emoji="🔥">
        <ListManager storeKey="manifest" placeholder="Desiderio/obiettivo"
          extraFields={[
            {name:"data", placeholder:"Data target", type:"date"},
            {name:"passi", placeholder:"Passaggi per realizzarlo"}
          ]}/>
      </Section>
    </>
  );
}
