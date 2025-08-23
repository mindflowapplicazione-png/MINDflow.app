// /pages/api/checkout.js

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo non consentito" });
  }

  try {
    const { priceId, customerEmail } = req.body;

    if (!priceId) {
      return res.status(400).json({ error: "Manca il priceId" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "subscription",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      customer_email: customerEmail || undefined,
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/canceled`,
    });

    return res.status(200).json({ id: session.id, url: session.url });
  } catch (err) {
    console.error("Errore checkout:", err);
    return res.status(500).json({ error: "Errore creazione sessione" });
  }
}
