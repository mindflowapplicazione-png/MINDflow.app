import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({error: 'Method Not Allowed'});

  try {
    // scegli un price ID passato dal client o di default
    const { priceId = process.env.STRIPE_PRICE_BOCCIOLI } = req.body || {};

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/profilo?ok=1`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/profilo?cancel=1`,
      metadata: { plan: priceId }
    });

    return res.status(200).json({ id: session.id, url: session.url });
  } catch (err) {
    console.error('checkout error', err);
    return res.status(500).json({ error: err.message });
  }
}
