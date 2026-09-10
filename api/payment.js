export const config = { runtime: 'edge' };

const SHOP_ID = '440587';
const MAX_AMOUNT = 300000;
const PRODUCTS = {
  'AI Product Sprint': 50000,
  'Product Blueprint': 150000,
  'Product Owner': 300000,
  'White Label Start': 300000,
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
}

function clean(value, max = 200) {
  return String(value || '').trim().slice(0, max);
}

export default async function handler(request) {
  if (request.method !== 'POST') return json({ ok: false, error: 'Method not allowed' }, 405);

  const secretKey = process.env.YOOKASSA_SECRET_KEY;
  if (!secretKey) return json({ ok: false, error: 'Payment provider is not configured' }, 503);

  let body;
  try { body = await request.json(); } catch { return json({ ok: false, error: 'Invalid JSON' }, 400); }

  const product = clean(body.product, 80);
  const amount = PRODUCTS[product];
  const email = clean(body.email, 160);
  const name = clean(body.name, 120);
  const consent = body.consent === true;

  if (!amount || amount > MAX_AMOUNT || !name || !email || !consent || !/^\S+@\S+\.\S+$/.test(email)) {
    return json({ ok: false, error: 'Заполните имя, корректный email и согласие с условиями заказа' }, 400);
  }

  const payment = await fetch('https://api.yookassa.ru/v3/payments', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`${SHOP_ID}:${secretKey}`)}`,
      'Content-Type': 'application/json',
      'Idempotence-Key': crypto.randomUUID(),
    },
    body: JSON.stringify({
      amount: { value: amount.toFixed(2), currency: 'RUB' },
      capture: true,
      confirmation: { type: 'redirect', return_url: `${new URL(request.url).origin}/services?payment=success` },
      description: `${product} — ${name}`,
      receipt: {
        customer: { email },
        items: [{ description: product, quantity: '1.00', amount: { value: amount.toFixed(2), currency: 'RUB' }, vat_code: 1, payment_mode: 'full_payment', payment_subject: 'service' }],
      },
      metadata: { product, customer_name: name, customer_email: email },
    }),
  });

  if (!payment.ok) return json({ ok: false, error: 'Не удалось создать платёж. Попробуйте ещё раз.' }, 502);
  const data = await payment.json();
  return json({ ok: true, confirmationUrl: data.confirmation?.confirmation_url });
}
