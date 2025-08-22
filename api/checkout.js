// Vercel Serverless Function
import Stripe from 'stripe';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const { plan, success_url, cancel_url } = req.body || {};
    const priceMap = {
      buds: process.env.STRIPE_PRICE_BUDS,       // deve essere un price_*** (abbonamento)
      flowers: process.env.STRIPE_PRICE_FLOWERS,
      premium: process.env.STRIPE_PRICE_PREMIUM
    };

    const price = priceMap[plan];
    if (!price) return res.status(400).json({ error: 'Piano non valido o PRICE mancante nelle env' });

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price, quantity: 1 }],
      success_url: success_url || process.env.NEXT_PUBLIC_SITE_URL,
      cancel_url: cancel_url || process.env.NEXT_PUBLIC_SITE_URL,
      allow_promotion_codes: true
    });

    return res.status(200).json({ url: session.url });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: e.message });
  }
}
