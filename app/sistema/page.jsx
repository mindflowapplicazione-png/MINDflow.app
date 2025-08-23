"use client";
import Section from "@/components/Section";
import StripeButtons from "@/components/StripeButtons";

export default function Sistema(){
  const site = process.env.NEXT_PUBLIC_SITE_URL || "";
  return (
    <>
      <h1 className="h1">MINDflow</h1>
      <div className="subtitle">Impostazioni & Collegamenti</div>

      <Section title="Privacy" emoji="🔒">
        <label className="row"><input type="checkbox" /> Ho letto e accetto la Privacy Policy e i Termini.</label>
        <div className="subtitle">Questo abilita cloud/backup quando li attivi.</div>
      </Section>

      <Section title="Collegamenti (dev)" emoji="🧰">
        <div className="item"><div>Stripe status:</div><div className="badge">{process.env.NEXT_PUBLIC_STRIPE_MODE || "TEST"}</div></div>
        <div className="item"><div>Site URL:</div><div className="badge">{site}</div></div>
        <div style={{marginTop:12}}><StripeButtons/></div>
      </Section>
    </>
  );
}
