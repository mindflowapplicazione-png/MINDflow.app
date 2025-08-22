import Stripe from 'stripe';

export const config = { api: { bodyParser: false } };

function rawBody(readable) {
  return new Promise((resolve, reject) => {
    let data = '';
    readable.on('data', chunk => (data += chunk));
    readable.on('end', () => resolve(Buffer.from(data)));
    readable.on('error', reject);
  });
}

export default async function handler(req, res) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = req.headers['stripe-signature'];
  const buf = await rawBody(req);

  let event;
  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature failed', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // TODO: salva su Supabase quando lo abiliti
  switch (event.type) {
    case 'checkout.session.completed':
      console.log('Checkout completato:', event.data.object.id);
      break;
    case 'customer.subscription.created':
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted':
      console.log('Subscription event:', event.type);
      break;
    default:
      console.log('Unhandled event:', event.type);
  }
  res.json({ received: true });
}
