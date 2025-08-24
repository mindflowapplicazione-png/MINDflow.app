// lib/products.js
/**
 * Catalogo digitale per Carriera & Mindset.
 * Metti qui i tuoi contenuti (puoi aggiungerne altri).
 * priceId: incolla l'ID prezzo creato su Stripe (Price).
 */
export const products = [
  {
    id: 'podcast-mindset-01',
    type: 'podcast',
    title: 'Podcast: Mindset Antifragile',
    desc: 'Serie audio (10 episodi) su focus, disciplina e resilienza.',
    price: 1490, // in centesimi (€14,90)
    currency: 'eur',
    priceId: 'price_xxx_podcast', // <-- SOSTITUISCI
    badge: 'Top Seller',
  },
  {
    id: 'libro-crescita-01',
    type: 'book',
    title: 'eBook: Crescita Intenzionale',
    desc: '120 pagine pratiche con esercizi e schede.',
    price: 1990,
    currency: 'eur',
    priceId: 'price_xxx_book', // <-- SOSTITUISCI
    badge: 'Nuovo',
  },
  {
    id: 'pdf-routine-01',
    type: 'pdf',
    title: 'PDF: Routine Alta Performance',
    desc: 'Template editabile per routine settimanali.',
    price: 590,
    currency: 'eur',
    priceId: 'price_xxx_pdf', // <-- SOSTITUISCI
  },
];

/** utilità di formattazione */
export function formatPrice(amount, currency = 'eur') {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format((amount || 0) / 100);
}
