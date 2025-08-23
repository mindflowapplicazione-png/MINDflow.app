import Stripe from "stripe";

export async function POST(req) {
  try {
    const { priceId } = await req.json();
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/profilo`,
      billing_address_collection: "auto",
      allow_promotion_codes: true
    });
    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: e.message }), { status: 400 });
  }
}
