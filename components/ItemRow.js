export default function ItemRow({item,onToggle,onDelete,checkable}){
  return (
    <div className="item">
      {checkable &&
        <input type="checkbox" checked={!!item.done} onChange={onToggle} />}
      <div style={{flex:1}}>
        <div className="title">{item.__label || item.titolo || item.azione || item.nome || item.item || item.descrizione || "Voce"}</div>
        <div className="small">{item.__subtitle || item.descrizione || item.note || item.passaggi}</div>
      </div>
      <button className="btn secondary" onClick={onDelete}>Elimina</button>
    </div>
  );
}
