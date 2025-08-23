export default function Section({ title, emoji, children }) {
  return (
    <section className="panel">
      <div className="row" style={{justifyContent:"space-between"}}>
        <h2 style={{fontSize:18, fontWeight:800}}>{emoji} {title}</h2>
      </div>
      <div style={{marginTop:10}}>{children}</div>
    </section>
  );
}
