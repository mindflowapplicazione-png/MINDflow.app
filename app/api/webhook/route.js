import Stripe from "stripe";

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });
  const sig = req.headers.get("stripe-signature");
  const body = await req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook signature verification failed.", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed":
      // Qui puoi segnare l’utente come "premium" nel DB/Supabase
      console.log("Checkout completo:", event.data.object.id);
      break;
    case "customer.subscription.updated":
    case "customer.subscription.deleted":
      console.log("Sub change:", event.data.object.id);
      break;
    default:
      console.log(`Evento non gestito: ${event.type}`);
  }

  return new Response("ok", { status: 200 });
}

export const config = { api: { bodyParser: false } }; // importante per raw body
