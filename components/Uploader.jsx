"use client";
import { useState } from "react";

export default function Uploader({ accept="image/*,audio/*,video/*", onFiles }) {
  const [names, setNames] = useState([]);
  return (
    <div className="row">
      <input className="input" type="file" multiple accept={accept}
             onChange={e=>{ 
               const files = Array.from(e.target.files || []);
               setNames(files.map(f=>f.name));
               onFiles?.(files);
             }}/>
      {names.length>0 && <div className="badge">{names.length} file</div>}
    </div>
  );
}
