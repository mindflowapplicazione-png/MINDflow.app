import Stripe from "stripe";
import { buffer } from "micro";

export const config = { api: { bodyParser: false } };

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2023-10-16" });

export default async function handler(req, res){
  if(req.method !== "POST") return res.status(405).end("Method Not Allowed");
  const sig = req.headers["stripe-signature"];
  const buf = await buffer(req);
  let event;

  try{
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  }catch(err){
    console.error("Webhook signature verify failed", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try{
    if(event.type === "checkout.session.completed"){
      const session = event.data.object;
      // TODO: qui potrai salvare su Supabase l’utente e il piano
      console.log("✅ checkout.session.completed", session.id, session.customer_email || session.customer);
    }
    // aggiungi altri eventi se ti servono
    return res.json({received: true});
  }catch(err){
    console.error("Webhook handler error:", err);
    return res.status(500).send("Server error");
  }
}
