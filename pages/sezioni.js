import Header from "../components/Header";
import SectionBlock from "../components/SectionBlock";
import { SECTIONS } from "../lib/sections-config";

export default function Sezioni(){
  return (
    <div className="container">
      <Header/>
      <div id="mindset"></div>
      {SECTIONS.map(s => <SectionBlock key={s.id} section={s}/>)}
    </div>
  );
}
