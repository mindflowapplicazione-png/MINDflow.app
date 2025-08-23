import Stripe from "stripe";
import { buffer } from "micro";

export const config = {
  api: { bodyParser: false }, // importantissimo per raw body
};

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });
  const sig = req.headers["stripe-signature"];
  const whSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  try {
    const buf = await buffer(req);
    event = stripe.webhooks.constructEvent(buf, sig, whSecret);
  } catch (err) {
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  // TODO: collega Supabase e aggiorna lo stato abbonamento in base all’evento
  // Esempio:
  // if (event.type === "checkout.session.completed") { ... }

  return res.status(200).json({ received: true });
}
