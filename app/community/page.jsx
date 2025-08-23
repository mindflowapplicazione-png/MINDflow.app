"use client";
import Section from "@/components/Section";
import Uploader from "@/components/Uploader";
import ListManager from "@/components/ListManager";
import { useState } from "react";

export default function Community(){
  const [files, setFiles] = useState([]);
  return (
    <>
      <h1 className="h1">MINDflow</h1>
      <div className="subtitle">Community</div>

      <Section title="Condividi" emoji="✨">
        <textarea className="text" rows={4} placeholder="Cosa stai pensando oggi?"/>
        <div style={{height:8}}/>
        <Uploader onFiles={setFiles}/>
        <div style={{height:8}}/>
        <button className="btn">Pubblica</button>
      </Section>

      <Section title="TODO per domani (privato)" emoji="🧱">
        <ListManager storeKey="community_tomorrow" placeholder="Aggiungi cosa da fare..." />
      </Section>
    </>
  );
}
