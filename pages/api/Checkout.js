import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ ok: true, info: "Use POST to create a checkout session" });
  }
  if (req.method !== "POST") {
    return res.status(405).end("Method Not Allowed");
  }

  try {
    const { plan } = req.body || {};
    if (!plan) return res.status(400).json({ error: "Missing plan" });

    // mappa i Price ID dalle env (devono iniziare con 'price_')
    const priceMap = {
      buds: process.env.STRIPE_PRICE_BUDS,
      flowers: process.env.STRIPE_PRICE_FLOWERS,
      premium: process.env.STRIPE_PRICE_PREMIUM,
    };
    const priceId = priceMap[plan];
    if (!priceId || !priceId.startsWith("price_")) {
      return res.status(500).json({ error: "Invalid STRIPE_PRICE_* env (must be a price_.. id)" });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });
    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      success_url: `${siteUrl}/profile?status=success`,
      cancel_url: `${siteUrl}/profile?status=cancel`,
      metadata: { plan },
    });

    return res.status(200).json({ url: session.url });
  } catch (e) {
    return res.status(500).json({ error: e.message || "Unknown error" });
  }
}
