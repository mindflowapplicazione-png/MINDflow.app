"use client";
import Section from "@/components/Section";
import ListManager from "@/components/ListManager";
import Uploader from "@/components/Uploader";
import { useState } from "react";

export default function Emozioni(){
  const [files, setFiles] = useState([]);

  return (
    <>
      <h1 className="h1">MINDflow</h1>
      <div className="subtitle">Emozioni</div>

      <Section title="📊 Tracker umore" emoji="📊">
        <ListManager storeKey="umore" placeholder="Nota breve"
          extraFields={[
            {name:"orario", placeholder:"Orario", type:"time"},
            {name:"umore", placeholder:"😭☹️😑🙂🥰 (scegli)", default:"🙂"},
            {name:"intensita", placeholder:"% intensità", type:"number"},
            {name:"trigger", placeholder:"Trigger emotivo ⁉️"},
            {name:"influenza", placeholder:"% influenza nella vita", type:"number"},
            {name:"dipende", placeholder:"% dipende da me", type:"number"},
            {name:"azione", placeholder:"Cosa fare per risolvere"}
          ]}/>
        <Uploader onFiles={setFiles}/>
      </Section>

      <Section title="🙏 Gratitudine (1-5)" emoji="🙏">
        <ListManager storeKey="gratitudine" placeholder="Descrizione"
          extraFields={[{name:"percentuale", placeholder:"% gratitudine", type:"number"}]}/>
      </Section>

      <Section title="✨ Self-care del giorno" emoji="✨">
        <ListManager storeKey="selfcare" placeholder="Nome rituale"
          extraFields={[
            {name:"step", placeholder:"Passaggi step-by-step"},
            {name:"esito", placeholder:"Come mi sento alla fine"}
          ]}/>
      </Section>

      <Section title="🔔 Promemoria Self-care" emoji="🔔">
        <ListManager storeKey="promemoria_selfcare" placeholder="Promemoria (es. 20:00 respirazione)"
          extraFields={[{name:"orario", placeholder:"Orario", type:"time"}]}/>
      </Section>

      <Section title="🌙 Sonno & umore" emoji="🌙">
        <ListManager storeKey="sonno_umore" placeholder="Nota"
          extraFields={[
            {name:"ore", placeholder:"Ore di sonno", type:"number"},
            {name:"umore", placeholder:"Umore al risveglio"}
          ]}/>
      </Section>
    </>
  );
}
