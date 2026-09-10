export const config = {
  runtime: 'edge',
};

const TELEGRAM_API = 'https://api.telegram.org/bot';

function clean(value, maxLength = 1200) {
  return String(value || '').trim().slice(0, maxLength);
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}

export default async function handler(request) {
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'Method not allowed' }, 405);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'Invalid JSON' }, 400);
  }

  const lead = {
    name: clean(body.name, 120),
    contact: clean(body.contact, 160),
    type: clean(body.type, 180),
    offer: clean(body.offer, 180),
    audience: clean(body.audience, 300),
    goal: clean(body.goal, 1600),
    privacyConsent: body.privacyConsent === true,
    termsConsent: body.termsConsent === true,
    marketingConsent: body.marketingConsent === true,
    consentVersion: clean(body.consentVersion, 40),
    consentTimestamp: clean(body.consentTimestamp, 80),
    pageUrl: clean(body.pageUrl, 500),
  };

  if (!lead.name || !lead.contact) {
    return json({ ok: false, error: 'Укажите имя и телефон или Telegram' }, 400);
  }

  // CODEX_TODO: Add TG_BOT_TOKEN to Vercel environment variables.
  // CODEX_TODO: Add TG_USER_ID to Vercel environment variables.
  const token = process.env.TG_BOT_TOKEN;
  const chatId = process.env.TG_USER_ID;

  if (!token || !chatId) {
    return json({ ok: false, error: 'Telegram env is not configured' }, 503);
  }

  const text = [
    'Новая заявка с chizhevskaya.pro',
    '',
    `Имя: ${lead.name}`,
    `Контакт: ${lead.contact}`,
    `Тип: ${lead.type}`,
    `Оффер: ${lead.offer}`,
    lead.audience ? `Аудитория/выручка: ${lead.audience}` : null,
    '',
    `Цель: ${lead.goal}`,
    '',
    `Согласие на ПД: да (${lead.consentVersion || 'версия не указана'})`,
    `Условия заказа: приняты`,
    `Рекламные сообщения: ${lead.marketingConsent ? 'да' : 'нет'}`,
    lead.consentTimestamp ? `Время согласия: ${lead.consentTimestamp}` : null,
    lead.pageUrl ? `Страница: ${lead.pageUrl}` : null,
  ].filter(Boolean).join('\n');

  const telegramResponse = await fetch(`${TELEGRAM_API}${token}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });

  if (!telegramResponse.ok) {
    return json({ ok: false, error: 'Telegram delivery failed' }, 502);
  }

  return json({ ok: true });
}
