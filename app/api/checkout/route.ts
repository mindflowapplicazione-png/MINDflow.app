import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

const priceMap: Record<string,string> = {
  basic: process.env.STRIPE_PRICE_BASIC || '',
  flowers: process.env.STRIPE_PRICE_FLOWERS || '',
  premium: process.env.STRIPE_PRICE_PREMIUM || ''
};

export async function POST(req: NextRequest){
  try{
    const { price } = await req.json() as { price: 'basic'|'flowers'|'premium' };
    const priceId = priceMap[price];
    if (!priceId) return NextResponse.json({error:'Price not configured'}, {status:400});

    const origin = process.env.NEXT_PUBLIC_SITE_URL!;
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/profile?status=success`,
      cancel_url: `${origin}/profile?status=cancelled`,
      // opzionale: customer_email: ...
    });

    return NextResponse.json({ url: session.url });
  }catch(e:any){
    return NextResponse.json({ error: e?.message || 'Checkout error' }, { status: 500 });
  }
}
