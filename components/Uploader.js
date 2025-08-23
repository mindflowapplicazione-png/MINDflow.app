export default function Uploader({onFile}){
  return <input className="input" type="file" onChange={e=>onFile?.(e.target.files?.[0])} />;
}
