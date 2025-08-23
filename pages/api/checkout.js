import Stripe from "stripe";

export const config = { api: { bodyParser: true } };

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2023-10-16" });

export default async function handler(req, res){
  try{
    if(req.method !== "POST") return res.status(405).json({error:"Method not allowed"});
    const priceId = (req.body?.priceId || "").trim() || process.env.STRIPE_PRICE_BUDS;
    if(!priceId) return res.status(400).json({error:"Missing priceId"});

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      success_url: `${req.headers.origin}/?success=1&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/?canceled=1`
    });

    // Per submit da form tradizionale faccio redirect, altrimenti JSON
    if(req.headers["content-type"]?.includes("application/x-www-form-urlencoded")){
      res.writeHead(303, { Location: session.url }); return res.end();
    }
    return res.status(200).json({url: session.url});
  }catch(err){
    console.error("checkout error", err);
    return res.status(500).json({error:"stripe_error"});
  }
}
