# Codex Task — Апгрейд сайта chizhevskaya.pro до цели 350k₽/мес чистыми

## КОНТЕКСТ

Текущий сайт `chizhevskaya-site/index.html` (1612 строк) — профессиональный лендинг.
Уже есть: HERO, Worked-with, Positioning, 6 Cases, Process (4 шага), 4 Offers пакета, Proof (9 цифр), Stack (26 технологий), FAQ (8 вопросов), Lead form (mailto).

**Цель апгрейда:** довести сайт до возможности генерировать **350 000₽/мес чистыми**. Главный gap — нет **Fractional Head of Product** пакета, который даёт устойчивый MRR (300-700k/мес × 1-2 контракта). Также: mailto-форма плохо конвертит, кейсы устарели (Своя → Перия, нет Rentra AI как полного кейса).

**Что НЕ делаем:**
- ❌ Не переделывай сайт с нуля — точечные апгрейды
- ❌ Не меняй дизайн-систему (зелёный #2D5A3D, кремовый #FAFAF8, Cormorant Garamond + Inter, скруглённые карточки 100px для кнопок, 20-24px для блоков)
- ❌ Не трогай Stack, Process, Proof секции — они уже работают
- ❌ Не удаляй существующие 4 оффера — добавляешь новые

**Контактные данные владельца** (использовать в правках):
- Имя на сайте: **Янина Чижевская**
- Telegram: **@yanina_ai** (Yanina Product Manager AI)
- Email: chizhevskaya86@gmail.com
- Телефон: +7 950 324 8406
- Локация: Казань · Удалённо
- Bio из Telegram (можно использовать в hero): «Управление IT разработкой. Запускаю AI проекты. Вайпкодим»

---

## ЗАДАЧА 1 — Добавить пакет «Fractional Head of Product» (главное)

Это основа устойчивого MRR 350k+/мес. Добавить **между Tier 2 (AI Product Launch) и Tier 3 (Корпоративное внедрение)**.

### HTML — новый блок в `<section class="section offers" id="offers">` после featured offer

```html
<!-- TIER 2.5: Fractional Head of Product -->
<div class="offer">
  <div class="offer-grid-2">
    <div>
      <div class="offer-tag">Тариф · Fractional · MRR</div>
      <h3 class="offer-name">Fractional Head of Product — внешний продакт на 20-40 часов в неделю</h3>
      <p class="offer-promise">
        Для health-стартапов и компаний, которым нужен сеньорный продакт с AI-стеком, но не нужен фуллтайм-найм. Беру 1-2 проекта параллельно, веду как inhouse Head of Product: продуктовая стратегия, дорожная карта, AI-фичи, ритуалы команды. Без оффера на штатное место, без социального пакета, без срока обучения.
      </p>
      <ul class="stack-list">
        <li>Продуктовая стратегия и roadmap на 6-12 месяцев</li>
        <li>Управление продуктовыми спринтами и приоритизация бэклога</li>
        <li>AI-интеграции в существующий продукт: Claude / GPT / Gemini с fallback</li>
        <li>CustDev-исследования и валидация фич с реальной аудиторией</li>
        <li>Юнит-экономика, метрики, A/B-тесты, retention-стратегия</li>
        <li>Координация дизайнеров, разработчиков и подрядчиков</li>
        <li>Еженедельные синки + дашборд прогресса для собственника</li>
        <li>Без vendor lock-in: исходники, доки, аккаунты — ваши</li>
      </ul>
    </div>

    <div>
      <div class="tier-grid" style="display:grid; gap:16px; margin-bottom:24px;">
        <div class="tier-row" style="padding:20px; border:1px solid var(--border); border-radius:16px;">
          <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:8px;">
            <b style="font-size:16px;">Light</b>
            <span style="font-family:'Cormorant Garamond',serif; font-size:24px; color:var(--green-deep);">150 000 ₽/мес</span>
          </div>
          <div style="font-size:13px; color:var(--ink-mute);">20 часов в неделю · стратегия + ревью спринтов · 1 синк/неделя</div>
        </div>
        <div class="tier-row featured" style="padding:20px; border:2px solid var(--green); border-radius:16px; background:var(--green-tint);">
          <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:8px;">
            <b style="font-size:16px;">Standard ⭐</b>
            <span style="font-family:'Cormorant Garamond',serif; font-size:24px; color:var(--green-deep);">350 000 ₽/мес</span>
          </div>
          <div style="font-size:13px; color:var(--ink-soft);">30 часов в неделю · hands-on продукт · 2 синка + рабочие сессии</div>
        </div>
        <div class="tier-row" style="padding:20px; border:1px solid var(--border); border-radius:16px;">
          <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:8px;">
            <b style="font-size:16px;">Deep</b>
            <span style="font-family:'Cormorant Garamond',serif; font-size:24px; color:var(--green-deep);">600 000 ₽/мес</span>
          </div>
          <div style="font-size:13px; color:var(--ink-mute);">40 часов в неделю · полный Head of Product · ежедневная коммуникация</div>
        </div>
      </div>

      <div class="guarantee-box">
        <b>Минимальный срок</b>
        Контракт от 3 месяцев. После — продление помесячно. На первый месяц — испытательный период: не подошли друг другу — расходимся без неустоек.
      </div>

      <a href="#lead" class="btn btn-primary" style="width: 100%; justify-content: center;">Обсудить Fractional <span class="arrow">→</span></a>

      <div class="scarcity">
        <b>1 из 2 слотов</b> доступен сейчас
      </div>
    </div>
  </div>
</div>
```

### Acceptance criteria
- [ ] Блок размещён между `<!-- TIER 2: FULL BUILD - FEATURED -->` и `<!-- TIER 3: Consulting + Revenue Share -->`
- [ ] Стилизован консистентно с другими офферами (использует существующие классы `.offer`, `.offer-grid-2`, `.guarantee-box`, `.scarcity`, `.btn-primary`)
- [ ] Standard tier визуально выделен (зелёный border + green-tint фон)
- [ ] Мобильная адаптация работает (offer-grid-2 уже умеет в `<= 700px`)

### Commit
`Add Fractional Head of Product pricing tier (Light 150k / Standard 350k / Deep 600k)`

---

## ЗАДАЧА 2 — Добавить «AI Product Audit» (промежуточная ступень 150k)

Между бесплатным AI-Аудитом (5 дней, 0₽) и Concept Sprint (14 дней, 79k₽) — большой gap. Добавить **платный глубокий аудит** для тех, кому нужен не концепт нового продукта, а **диагностика существующего**.

### HTML — новый блок в `<section class="section offers" id="offers">` между lead-magnet и Concept Sprint

```html
<!-- TIER 0.5: Paid Deep Audit -->
<div class="offer">
  <div class="offer-grid-2">
    <div>
      <div class="offer-tag">Тариф 0.5 · Аудит</div>
      <h3 class="offer-name">AI Product Audit существующего продукта за 14 дней</h3>
      <p class="offer-promise">
        Для тех, у кого уже есть работающий продукт (приложение, лендинг, школа, SaaS), но не растёт revenue или непонятно куда добавлять AI. Делаю глубокий продуктовый и AI-аудит, отдаю отчёт с конкретными изменениями, ранжированными по ROI.
      </p>
      <ul class="stack-list">
        <li>Аудит продукта: UX, воронка, конверсия по экранам, дроп-офф точки</li>
        <li>Аудит юнит-экономики: где утекает GP, какие метрики не считаются</li>
        <li>AI-возможности: 5-10 конкретных мест где AI даст рост CR/LTV/retention</li>
        <li>Конкурентный разбор: 5 аналогов на западе и в РФ с проверкой их продуктовых решений</li>
        <li>Roadmap из 8-12 фич с оценкой effort × impact (квадрант 2x2)</li>
        <li>30-страничный отчёт в PDF + 90-минутная сессия разбора</li>
        <li>Follow-up через 30 дней — проверить что внедрили</li>
      </ul>
    </div>

    <div>
      <div class="value-box">
        <div class="value-row"><span>Продуктовый аудит</span><span>80 000 ₽</span></div>
        <div class="value-row"><span>Аудит юнит-экономики</span><span>45 000 ₽</span></div>
        <div class="value-row"><span>AI-возможности (10 точек)</span><span>60 000 ₽</span></div>
        <div class="value-row"><span>Конкурентный разбор</span><span>35 000 ₽</span></div>
        <div class="value-row"><span>Roadmap effort × impact</span><span>30 000 ₽</span></div>
        <div class="value-row"><span>30-страничный отчёт</span><span>40 000 ₽</span></div>
        <div class="value-row"><span>Follow-up через 30 дн.</span><span>25 000 ₽</span></div>
        <div class="value-row total"><span>Итого ценность</span><span class="total-value">315 000 ₽</span></div>
      </div>

      <div class="price-box">
        <div class="offer-price-old">обычно 250 000 ₽</div>
        <div class="offer-price">150 000 ₽</div>
        <div class="offer-price-meta">срок: 14 рабочих дней</div>
      </div>

      <div class="guarantee-box">
        <b>Гарантия результата</b>
        Если в отчёте не будет минимум 5 actionable изменений с конкретными цифрами ROI — возвращаю 100% денег. Отчёт остаётся вам.
      </div>

      <a href="#lead" class="btn btn-primary" style="width: 100%; justify-content: center;">Записаться на Аудит <span class="arrow">→</span></a>

      <div class="scarcity">
        <b>3 слота в месяц</b>
      </div>
    </div>
  </div>
</div>
```

### Acceptance criteria
- [ ] Блок размещён между lead-magnet (бесплатный) и Concept Sprint (79k)
- [ ] Логически дополняет «лестницу работы»: 0₽ → 150k → 79k (Concept) → 500k+ (Launch) → 150-600k/мес (Fractional) → корпоратив → revenue share
- [ ] Стилизация консистентна

### Commit
`Add Paid AI Product Audit tier (150k for 14 days)`

---

## ЗАДАЧА 3 — Обновить кейсы: Перия + Rentra AI

### 3.1 — «Своя» → «Перия»

В блоке кейса `<h3>Своя</h3>`:
- Заменить заголовок: `<h3>Перия</h3>`
- Заменить упоминание `@SvoyaApp_bot` на `@PeriyaApp_bot`
- В описании добавить упоминание домена `periya.pro`
- Случай: продукт переименован с «Своя» на «Перия» (в материалах уже сделано, на сайте — нет)

### 3.2 — Добавить Rentra AI как полноценный кейс

Сейчас Rentra упоминается только в `<div class="other-projects">`. Это **самый большой проект в портфолио** (B2B SaaS, 2 рынка RU+UK, долгосрочный) — должен быть полноценной карточкой.

Добавить **первой карточкой** в `<div class="cases-grid">` (Rentra — главный кейс):

```html
<article class="case">
  <span class="case-status">В продакшене · 2025 — настоящее</span>
  <h3>Rentra AI</h3>
  <div class="case-meta">B2B SaaS для управляющих компаний краткосрочной аренды · rentra.ai · 2 рынка: RF + UK</div>
  <p>
    AI-платформа для УК краткосрочной аренды и апарт-отелей: AI-консьерж, аналитика, SmartUpsell, управление задачами. Веду как Vibe Coding Product Manager: продуктовая стратегия, упаковка под 2 рынка с i18n, контент-контур (блог под Яндекс и AI-поиск, YouTube с автопостингом), CRM-обвязка (Paperclip / pc-crm), QC-система проверки HTML-креативов, sales board. Прошла путь Lovable → Claude Code при упоре в потолок no-code.
  </p>
  <div class="case-stack">
    <span>React + TypeScript</span><span>Vite + Next.js</span><span>shadcn/ui</span><span>Supabase</span>
    <span>i18n (RU/EN)</span><span>SSR prerender</span><span>Lovable → Claude Code</span>
  </div>
</article>
```

### 3.3 — Удалить упоминание Rentra из `<div class="other-projects">`

Заменить блок «Другие проекты» на:
```html
<div class="other-projects">
  <b>Также в портфолио:</b> Interior AI Content Automation — мультиагентная система автоматизации SMM, блога и YouTube для ниши «дизайн интерьера». EdTech: 6 лет техдирекции 4 онлайн-школ нутрициологии (Beauty Education) — отстройка тех-отдела с нуля, регламенты, база знаний, снижение возвратов клиентов из-за несвоевременного доступа.
</div>
```

### Acceptance criteria
- [ ] Rentra AI — первая карточка в cases-grid (визуально главный кейс)
- [ ] Перия (бывшая Своя) с обновлённым ботом @PeriyaApp_bot и доменом periya.pro
- [ ] Other-projects обновлён — Rentra оттуда удалена, остались Interior AI и Beauty Education

### Commit
`Update cases: rename Своя→Перия, add Rentra AI as primary case`

---

## ЗАДАЧА 4 — Заменить mailto-форму на прямой Telegram-флоу + самописная форма с TG-уведомлениями

Текущая форма: `<form action="mailto:chizhevskaya86@gmail.com">`. Mailto = плохая конверсия (5 кликов).
**НЕ используем Calendly/Tally** — у владельца есть навыки vibe coding и публичный Telegram. Делаем своё.

Решение: **двойной флоу**:
1. **Все CTA-кнопки** на сайте → прямой Telegram deeplink с pre-filled текстом (1 клик).
2. **Lead-секция** (нижний блок «#lead») → самописная HTML-форма + Vercel Edge Function → уведомление в Telegram через Bot API.

### Часть 1 — Обновить все CTA-кнопки на Telegram deeplink

Для каждого оффера — свой текст, чтобы по приходящему сообщению видно с какого блока пришёл клиент.

```html
<!-- LEAD MAGNET (бесплатный AI-аудит) -->
<a href="https://t.me/yanina_ai?text=Здравствуйте%2C%20хочу%20на%20бесплатный%20AI-аудит%20за%205%20дней"
   class="btn btn-primary" style="width: 100%; justify-content: center;">
  Записаться на AI-аудит <span class="arrow">→</span>
</a>

<!-- AI Product Audit (150k) -->
<a href="https://t.me/yanina_ai?text=Хочу%20Audit%20существующего%20продукта%20за%2014%20дней"
   class="btn btn-primary" ...>Записаться на Аудит <span class="arrow">→</span></a>

<!-- Concept Sprint (79k) -->
<a href="https://t.me/yanina_ai?text=Интересует%20Concept%20Sprint%20за%2014%20дней"
   class="btn btn-primary" ...>Записаться на Concept Sprint <span class="arrow">→</span></a>

<!-- Fractional Head of Product -->
<a href="https://t.me/yanina_ai?text=Хочу%20обсудить%20Fractional%20Head%20of%20Product"
   class="btn btn-primary" ...>Обсудить Fractional <span class="arrow">→</span></a>

<!-- AI Product Launch (500k+) -->
<a href="https://t.me/yanina_ai?text=Хочу%20запустить%20AI-приложение%20под%20ключ%20за%206%20недель"
   class="btn btn-primary" ...>Обсудить ваш проект <span class="arrow">→</span></a>

<!-- Корпоративное внедрение -->
<a href="https://t.me/yanina_ai?text=Хочу%20обсудить%20внедрение%20AI%20в%20компанию"
   class="btn btn-primary" ...>Обсудить внедрение <span class="arrow">→</span></a>

<!-- Revenue Share партнёрство -->
<a href="https://t.me/yanina_ai?text=Подаю%20заявку%20на%20Revenue%20Share%20партнёрство"
   class="btn btn-primary" ...>Подать заявку на партнёрство <span class="arrow">→</span></a>

<!-- Hero -->
<a href="https://t.me/yanina_ai?text=Здравствуйте%2C%20пришёл%20с%20сайта%20chizhevskaya.pro" class="btn btn-primary">
  Получить AI-аудит за 5 дней <span class="arrow">→</span>
</a>

<!-- Nav -->
<a href="https://t.me/yanina_ai?text=Бесплатный%20AI-аудит" class="btn-nav">Бесплатный AI-аудит</a>
```

⚠️ **Заменить ВСЕ существующие `href="#lead"` на соответствующий Telegram deeplink.** Якорь `#lead` оставить только на одной кнопке внизу для тех кто всё-таки хочет форму (Часть 2).

### Часть 2 — Самописная форма в Lead-секции с уведомлением в Telegram

Цель: для серьёзных лидов (Launch 500k+ или Fractional Standard 350k/мес) — короткая квалифицирующая форма. Уведомление прилетает владельцу **в Telegram моментально**.

#### 2.1 — HTML-форма (заменить mailto-форму)

```html
<form id="lead-form" class="lead-form" novalidate>
  <div class="form-row">
    <label>Как вас зовут</label>
    <input type="text" name="name" placeholder="Имя" required>
  </div>
  <div class="form-row">
    <label>Telegram или email</label>
    <input type="text" name="contact" placeholder="@username или вы@example.com" required>
  </div>
  <div class="form-row">
    <label>Что у вас</label>
    <select name="type" required>
      <option value="">Выберите...</option>
      <option>Блог / эксперт с аудиторией</option>
      <option>Онлайн-школа</option>
      <option>Health-бренд / стартап</option>
      <option>Клиника / медицинский бизнес</option>
      <option>FemTech / wellness app</option>
      <option>Корпоративное внедрение AI</option>
      <option>Fractional Head of Product</option>
      <option>Revenue Share партнёрство</option>
      <option>Другое</option>
    </select>
  </div>
  <div class="form-row">
    <label>Бюджет (если известен)</label>
    <select name="budget">
      <option value="">Не определён</option>
      <option>До 150 000 ₽</option>
      <option>150 000 — 500 000 ₽</option>
      <option>500 000 — 1 500 000 ₽</option>
      <option>Fractional 150-600k ₽/мес</option>
      <option>Revenue Share без вложений</option>
    </select>
  </div>
  <div class="form-row">
    <label>Расскажите коротко о проекте (необязательно)</label>
    <textarea name="message" rows="3" placeholder="Аудитория, ниша, что уже есть, что нужно..."></textarea>
  </div>
  <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center;">
    Отправить заявку <span class="arrow">→</span>
  </button>
  <div id="lead-status" style="margin-top:16px; font-size:14px; text-align:center;"></div>
</form>

<script>
document.getElementById('lead-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const status = document.getElementById('lead-status');
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));
  status.textContent = 'Отправляю…';
  status.style.color = 'var(--ink-mute)';

  try {
    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed');
    status.textContent = '✓ Заявка отправлена. Отвечу в течение рабочего дня в Telegram.';
    status.style.color = 'var(--green)';
    form.reset();
  } catch (err) {
    status.textContent = '✗ Не отправилось. Напиши прямо в Telegram: @yanina_ai';
    status.style.color = '#C9655A';
  }
});
</script>
```

#### 2.2 — Vercel Serverless Function `api/lead.js`

Создать новый файл `chizhevskaya-site/api/lead.js`:

```javascript
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, contact, type, budget, message } = req.body || {};
  if (!name || !contact || !type) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const text =
    `🔔 *Новая заявка с chizhevskaya.pro*\n\n` +
    `*Имя:* ${name}\n` +
    `*Контакт:* ${contact}\n` +
    `*Тип:* ${type}\n` +
    `*Бюджет:* ${budget || '—'}\n` +
    `*Сообщение:* ${message || '—'}`;

  const botToken = process.env.TG_BOT_TOKEN;
  const chatId = process.env.TG_USER_ID;

  if (!botToken || !chatId) {
    console.error('Missing TG_BOT_TOKEN or TG_USER_ID');
    return res.status(500).json({ error: 'Server not configured' });
  }

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'Markdown',
      }),
    });
    if (!tgRes.ok) {
      const errText = await tgRes.text();
      console.error('Telegram API error:', errText);
      return res.status(502).json({ error: 'Notification failed' });
    }
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('Handler error:', e);
    return res.status(500).json({ error: 'Internal error' });
  }
}
```

#### 2.3 — Переменные окружения Vercel

⚠️ **CODEX_TODO:** в Vercel dashboard добавить:
- `TG_BOT_TOKEN` — токен Telegram-бота (создаётся через @BotFather за 2 минуты)
- `TG_USER_ID` — ID Telegram-чата владельца куда приходят уведомления (узнать через @userinfobot)

Если переменные не настроены — форма вернёт ошибку и попросит юзера написать прямо в `@yanina_ai`. Это **graceful degradation**, не блокирует деплой.

### Acceptance criteria

- [ ] Все CTA-кнопки на сайте ведут на Telegram deeplink с pre-filled текстом
- [ ] Каждый оффер имеет свой текст в deeplink (чтобы видеть откуда пришёл)
- [ ] Mailto-форма заменена на новую с fetch на `/api/lead`
- [ ] Создан `api/lead.js` с обработчиком POST → Telegram Bot API
- [ ] При успехе — сообщение «✓ Заявка отправлена»
- [ ] При ошибке — fallback на Telegram (`@yanina_ai`)
- [ ] CODEX_TODO про переменные `TG_BOT_TOKEN` и `TG_USER_ID` помечен в отчёте

### Commit (два коммита)

1. `Replace all CTAs with Telegram deeplinks (pre-filled text per offer)`
2. `Add custom lead form with Vercel Edge Function + Telegram bot notifications`

---

## ЗАДАЧА 5 — Обновить Hero, Proof и Worked-with цифры

### 5.1 — Hero bullets

Заменить:
```html
<div>4+ AI-продукта в продакшене</div>
```
на:
```html
<div>6 AI-продуктов в портфолио</div>
```
*(Перия + Rentra AI + Lookbook AI + BreathFlow + Biogenom + Interior Automation)*

### 5.2 — Proof grid

В `<div class="proof-grid">` заменить:
```html
<div class="proof-cell">
  <div class="proof-num">4+</div>
  <div class="proof-label">AI-продукта в продакшене сейчас</div>
</div>
```
на:
```html
<div class="proof-cell">
  <div class="proof-num">6</div>
  <div class="proof-label">AI-продуктов запущено или в финальном тестировании</div>
</div>
```

### 5.3 — Worked with row

Добавить пометки про тип отношений:
```html
<div class="worked-with-row">
  <span>MindBodyFace (US/UK/EU) · продакт-роль</span>
  <span>Biogenom · стартап-продакт</span>
  <span>Beauty Education · техдиректор 6 лет</span>
  <span>Edpro · продакт</span>
  <span>Rentra AI · собственный продукт</span>
</div>
```

### Acceptance criteria
- [ ] Hero bullets обновлены
- [ ] Proof grid обновлён (6 продуктов вместо 4+)
- [ ] Worked-with row — добавлены пометки типа сотрудничества

### Commit
`Update proof numbers to reflect 6 AI products + clarify worked-with relationships`

---

## ЗАДАЧА 6 — Дополнить FAQ под новые пакеты

В `<div class="faq-grid">` добавить 3 новых FAQ:

```html
<details class="faq-item">
  <summary class="faq-q">Чем Fractional Head of Product отличается от консультанта или штатного продакта?</summary>
  <p class="faq-a">
    Консультант приходит на 1-2 сессии и оставляет вас с рекомендациями. Штатный продакт требует фуллтайма, оффера, социального пакета и 1-3 месяца на onboarding. Fractional — это «сеньорный продакт part-time»: я веду ваш продукт как inhouse, но 20-40 часов в неделю, без обязательств штатного найма. Беру 1-2 проекта параллельно, отвечаю за результат еженедельно. Контракт от 3 месяцев — обычно 6-12 месяцев устойчиво работают.
  </p>
</details>

<details class="faq-item">
  <summary class="faq-q">У меня уже есть продукт и команда. Зачем мне внешний продакт?</summary>
  <p class="faq-a">
    Если ваша команда занята операционкой, а продуктовое направление встало — внешний продакт быстрее даст направление, чем найм внутреннего. Я приношу: AI-стек, опыт 6 продуктов в продакшене, понимание health-вертикали, скорость vibe coding для прототипов и валидации. Обычная история: продакт-аудит за 2 недели → Fractional Standard на 3-6 месяцев → внутренний найм по моим критериям → плавная передача.
  </p>
</details>

<details class="faq-item">
  <summary class="faq-q">Работаете ли вы с проектами вне health/wellness?</summary>
  <p class="faq-a">
    Основная специализация — health, wellness, longevity, femtech и нутрициология (там у меня глубина: Перия, BreathFlow, MindBodyFace, Biogenom, 6 лет в онлайн-школах нутрициологии). Но в портфолио есть и B2B SaaS для краткосрочной аренды (Rentra AI), FashionTech (Lookbook AI) и контент-автоматизация. Если ваша ниша близка по продуктовой логике (подписка, AI-content, B2C-аудитория, медицинская специфика) — рассмотрю. Если совсем другой домен — могу не подойти честно.
  </p>
</details>
```

### Acceptance criteria
- [ ] 3 новых FAQ добавлены в `<div class="faq-grid">` после существующих 8
- [ ] Стилистика консистентна (использует существующие `<details class="faq-item">`)

### Commit
`Add 3 FAQ items about Fractional, external product role, and non-health projects`

---

## ЗАДАЧА 8 — Обновление стилей: воздух + терракотовый акцент + Inter

Текущий сайт работает, но **визуально перегружен** для целевой аудитории (HR крупных компаний, предприниматели, продакты). Нужен апгрейд под «серьёзный консультант».

### 8.1 — Палитра: добавить терракотовый как accent

В `:root` обновить переменные:

```css
:root {
  /* Базовый фон — больше воздуха */
  --bg: #FAFAF8;
  --bg-soft: #F4F2EE;        /* было F3F5F1 — теплее, ближе к терракоту */
  --bg-card: #FFFFFF;

  /* Текст */
  --ink: #1A1A1A;
  --ink-soft: rgba(26,26,26,0.72);
  --ink-mute: rgba(26,26,26,0.48);

  /* Главный — тёмно-зелёный (без изменений) */
  --green: #2D5A3D;
  --green-deep: #1F4029;
  --green-tint: rgba(45,90,61,0.08);
  --green-line: rgba(45,90,61,0.22);
  --green-soft: rgba(45,90,61,0.5);

  /* Акцент — терракотовый (NEW, заменяет gold для выделений) */
  --terracotta: #B5886A;
  --terracotta-deep: #8C6750;
  --terracotta-tint: rgba(181,136,106,0.10);
  --terracotta-line: rgba(181,136,106,0.30);

  /* Старый gold оставить только для lead-magnet badge */
  --gold: #C9A961;

  --border: rgba(26,26,26,0.08);
  --border-soft: rgba(26,26,26,0.05);

  --radius: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;          /* NEW — для крупных секций */

  --shadow: 0 4px 16px rgba(26,26,26,0.04);
  --shadow-hover: 0 12px 40px rgba(26,26,26,0.08);
}
```

### 8.2 — Шрифты: Inter везде вместо Cormorant + Inter

⚠️ **Удалить Cormorant Garamond полностью.** Заменить на Inter Bold для заголовков (более «деловой», привычный для русскоязычного HR).

В `<head>` заменить `<link>` на:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

В CSS заменить все `font-family: 'Cormorant Garamond', serif;` и `font-family: 'Cormorant Garamond', Georgia, serif;` на `font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;`.

Для заголовков использовать **Inter Bold 700-800** + увеличенный letter-spacing -0.02em для эффекта «делового» серьёзного:

```css
h1, h2, h3, .offer-name {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.15;
}

h1 { font-size: 56px; font-weight: 800; }
h2 { font-size: 40px; font-weight: 700; }
h3 { font-size: 24px; font-weight: 700; }
```

### 8.3 — «Много воздуха»: увеличить padding и margin

Секции сейчас `padding: 80px 24px`. Увеличить до **120px на десктопе, 80px на мобилке**:

```css
section {
  padding: 120px 24px;
}
@media (max-width: 768px) {
  section { padding: 80px 20px; }
}

.section-tight { padding: 100px 24px; }
@media (max-width: 768px) {
  .section-tight { padding: 64px 20px; }
}

/* Между блоками внутри секций — больше воздуха */
.section-title { margin-bottom: 24px; }
.section-lead { margin-bottom: 56px; max-width: 720px; line-height: 1.7; }

/* Кейсы и офферы — крупнее */
.case { padding: 48px; }
@media (max-width: 768px) { .case { padding: 32px 24px; } }

.offer { padding: 64px; }
@media (max-width: 768px) { .offer { padding: 40px 24px; } }

/* Hero — много воздуха */
.hero {
  padding: 160px 24px 140px;
  min-height: 92vh;
  display: flex;
  align-items: center;
}
.hero h1 { margin-bottom: 32px; }
.hero-sub { margin-bottom: 40px; font-size: 20px; line-height: 1.65; max-width: 680px; }
.hero-bullets { margin-bottom: 56px; }

/* Footer — спокойный */
footer { padding: 96px 0 56px; }
```

### 8.4 — Терракотовый акцент: где использовать

Применить терракот для **выделения важного**:

```css
/* Цифры в proof — терракот */
.proof-num {
  color: var(--terracotta);
  font-weight: 800;
}

/* Hero accent слова (span.accent) — терракот вместо зелёного для контраста */
.hero .accent,
h1 .accent,
h2 .accent {
  color: var(--terracotta);
}

/* Pull-quote — терракотовая полоса слева */
.pull-quote {
  border-left: 3px solid var(--terracotta);
  color: var(--ink);              /* не зелёный, чтобы не перегружать */
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-style: normal;             /* убираем italic — серьёзнее */
  font-size: 22px;
  line-height: 1.55;
  padding: 8px 0 8px 32px;
}

/* Eyebrow (микро-заголовки секций) — терракот */
.eyebrow {
  color: var(--terracotta);
  font-size: 12px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 16px;
  display: inline-block;
}

/* Deco-line — терракот */
.deco-line {
  background: var(--terracotta);
  width: 80px;
  height: 2px;
  margin: 40px 0;
}

/* Hero tag (Беру 3 проекта...) — терракотовая плашка */
.hero-tag {
  display: inline-block;
  padding: 8px 18px;
  background: var(--terracotta-tint);
  color: var(--terracotta-deep);
  border: 1px solid var(--terracotta-line);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 32px;
}

/* Offer-tag (для обычных tier-ов) — терракот, для lead-magnet оставить gold */
.offer-tag {
  background: var(--terracotta-tint);
  color: var(--terracotta-deep);
  border-color: var(--terracotta-line);
}
.offer.lead-magnet .offer-tag {
  background: var(--gold);
  color: white;
  border-color: var(--gold);
}

/* Hover акценты — терракот */
nav a:hover,
.case-link:hover,
.footer-col a:hover {
  color: var(--terracotta);
}

/* Цены в офферах — терракот */
.offer-price {
  color: var(--terracotta-deep);
  font-weight: 800;
  font-size: 48px;
}
```

### 8.5 — Кнопки: оставить зелёные primary, но добавить терракотовый hover

```css
.btn-primary {
  background: var(--green);
  color: white;
  padding: 18px 36px;     /* воздушнее */
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.01em;
}
.btn-primary:hover {
  background: var(--terracotta-deep);   /* hover — терракот */
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(181, 136, 106, 0.30);
}

.btn-ghost {
  border: 1.5px solid var(--ink);
  padding: 17px 35px;
}
.btn-ghost:hover {
  background: var(--terracotta);
  color: white;
  border-color: var(--terracotta);
}
```

### 8.6 — Карточки кейсов: воздушнее + терракотовый акцент при hover

```css
.case {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 48px;
  transition: all 0.35s ease;
}
.case:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-hover);
  border-color: var(--terracotta-line);
}
.case-status {
  color: var(--terracotta);
  font-size: 11px;
  letter-spacing: 0.14em;
}
.case-stack span {
  background: var(--terracotta-tint);
  color: var(--terracotta-deep);
}
```

### 8.7 — Глобальные мелочи для «воздуха»

```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  line-height: 1.65;
  color: var(--ink);
  font-feature-settings: 'cv11', 'ss01', 'ss03';  /* красивая кириллица Inter */
  -webkit-font-smoothing: antialiased;
}

p { line-height: 1.7; }
.section-lead { font-size: 18px; line-height: 1.75; }

/* Nav — выше и спокойнее */
nav {
  padding: 28px 0;
  background: rgba(250, 250, 248, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-soft);
}
```

### Acceptance criteria

- [ ] Все упоминания `Cormorant Garamond` удалены из CSS и `<link>`
- [ ] Подключён только Inter (Google Fonts)
- [ ] Добавлены переменные `--terracotta`, `--terracotta-deep`, `--terracotta-tint`, `--terracotta-line`
- [ ] Секции стали воздушнее (120px desktop / 80px mobile)
- [ ] Hero увеличен (160px top padding, h1 56px)
- [ ] Терракотовый акцент применён к: proof-num, eyebrow, hero-tag, offer-tag (не lead-magnet), deco-line, pull-quote border, hover-состояния
- [ ] Кнопки primary при hover превращаются в терракотовые
- [ ] Карточки кейсов при hover получают терракотовую границу
- [ ] Мобильная адаптация работает (DevTools 375px)
- [ ] Сайт открывается, ничего не сломано

### Commit
`Refresh design: Inter only, terracotta accents, more whitespace`

---

## ЗАДАЧА 7 — Финальный деплой на Vercel + production URL

После завершения всех правок (TASK-1…6) — задеплоить на Vercel в production и вернуть пользователю **рабочую ссылку**.

### Контекст

Проект **уже связан** с Vercel (см. `.vercel/project.json`):
- `projectId: prj_cuLltYU3Y9BKE55J6w0dYlv6tp6e`
- `orgId: team_KIZydSf8JTd9ayuAO2yfAZaJ`
- `projectName: chizhevskaya-site`
- Кастомный домен (предположительно): `chizhevskaya.pro`

Vercel CLI уже авторизован в системе пользователя (Windows):
- Auth: `C:\Users\Пользователь\AppData\Roaming\com.vercel.cli\Data\auth.json`
- Config: `C:\Users\Пользователь\AppData\Roaming\com.vercel.cli\Data\config.json`

**Никаких токенов вручную искать не надо** — CLI сам подхватит авторизацию.

### Шаги для Codex

1. **Проверь что Vercel CLI установлен:**
   ```bash
   vercel --version
   ```
   Если не установлен:
   ```bash
   npm i -g vercel@latest
   ```

2. **Проверь что проект залинкован (должен быть уже):**
   ```bash
   cat .vercel/project.json
   ```
   Если файл отсутствует — линкуем:
   ```bash
   vercel link --yes
   ```
   (`--yes` использует существующий project ID если найден; иначе спросит — выбрать `chizhevskaya-site` из списка)

3. **Деплой в production:**
   ```bash
   vercel --prod --yes
   ```
   Флаг `--yes` пропускает все интерактивные вопросы (использует текущие настройки).

4. **Vercel вернёт URL вида:**
   ```
   ✅ Production: https://chizhevskaya-site-xxx.vercel.app  [10s]
   ```
   А также (если есть кастомный домен) URL на `chizhevskaya.pro`.

5. **Зафиксируй в отчёте:**
   - Production preview URL (vercel.app)
   - Custom domain URL (chizhevskaya.pro), если применился
   - Время деплоя
   - Build status

### Если деплой упал

Возможные причины и решения:

- **Authentication error** → запусти `vercel login` и попроси пользователя залогиниться через email (на whoami возвращает зарегистрированный email — `chizhevskaya86@gmail.com`)
- **No project linked** → `vercel link` → выбрать `chizhevskaya-site` из списка под organization `team_KIZydSf8JTd9ayuAO2yfAZaJ`
- **Build error** → проверить что `index.html` валидный HTML (открывается в браузере без ошибок консоли)
- **Domain не применился** → ничего страшного, vercel.app URL уже работает. Custom domain настраивается в дашборде Vercel отдельно (не задача Codex)

### Acceptance criteria

- [ ] `vercel --prod --yes` выполнен успешно
- [ ] В отчёте указан финальный production URL (vercel.app и/или chizhevskaya.pro)
- [ ] Открой полученный URL и проверь что главные секции рендерятся:
  - HERO с новыми bullets («6 AI-продуктов»)
  - Cases (Rentra AI первая, Перия вместо Своя)
  - Offers (5 пакетов: Lead Magnet → Audit 150k → Concept 79k → Fractional → Launch 500k → Корпоратив → Revenue Share)
  - Calendly/Tally виджет грузится (если не CODEX_TODO)
  - FAQ +3 вопроса

### Commit
`Deploy upgraded site to Vercel production`

---

## ИТОГОВЫЙ ЧЕК-ЛИСТ

- [ ] TASK-1 Fractional Head of Product пакет (150/350/600k/мес)
- [ ] TASK-2 AI Product Audit (150k за 14 дней)
- [ ] TASK-3 Cases: Перия + Rentra AI как полный кейс
- [ ] TASK-4 Telegram deeplinks везде + самописная форма с TG-уведомлениями (api/lead.js)
- [ ] TASK-5 Proof и Hero — 6 AI-продуктов
- [ ] TASK-6 FAQ +3 вопроса
- [ ] TASK-8 Stylesheet refresh: Inter, терракот, воздух
- [ ] TASK-7 Деплой на Vercel + production URL в отчёте

**Время:** ~4-5 часов работы Codex (включая стили и деплой)
**Файлы:** `chizhevskaya-site/index.html` + новый `api/lead.js` + деплой через Vercel CLI

---

## ДИЗАЙН-КОНСИСТЕНТНОСТЬ (важно)

Существующие CSS-переменные (использовать в новых блоках):

```css
--bg: #FAFAF8 (фон)
--bg-soft: #F3F5F1 (мягкий фон секций)
--bg-card: #FFFFFF (карточки)
--ink: #1A1A1A (тёмный текст)
--ink-soft: rgba(26,26,26,0.7) (вторичный текст)
--ink-mute: rgba(26,26,26,0.5) (мелкий текст)
--green: #2D5A3D (главный акцент)
--green-deep: #1F4029 (тёмно-зелёный)
--green-tint: rgba(45,90,61,0.08) (плашка)
--green-line: rgba(45,90,61,0.25) (граница)
--green-soft: rgba(45,90,61,0.5) (мягкий зелёный)
--gold: #C9A961 (золотой — для lead magnet)
--border: rgba(26,26,26,0.08)
--radius: 16px
--radius-lg: 24px
```

Шрифты:
- Заголовки `<h1>, <h2>, <h3>, .offer-name`: `'Cormorant Garamond', serif`
- Тело: `'Inter', sans-serif`

Кнопки:
- `.btn-primary` — зелёная, белый текст, border-radius 100px
- `.btn-ghost` — прозрачная, тёмный текст, граница

---

## ПРАВИЛА работы

- Атомарные commits — один на задачу
- Если упёрся — `// CODEX_TODO:` и продолжай
- Не пушь на remote сам
- Тестируй мобильную адаптацию (375px ширина)
- Не ломай существующие 4 пакета и 6 кейсов — только дополняй
- Сохрани существующие комментарии HTML

---

## ОТЧЁТ

После завершения:
1. Список 6 коммитов
2. Скриншоты desktop + mobile (новые блоки)
3. Что осталось как `// CODEX_TODO:` (например, Calendly URL placeholder)
4. Проверка — `index.html` валидный, открывается локально, не сломано существующее

---

## ФИНАЛЬНЫЙ ПРОМТ ДЛЯ КОПИРОВАНИЯ В CODEX

```
Прочитай CODEX_TASK_SITE_UPGRADE.md в папке chizhevskaya-site/ и выполни все 7 задач по апгрейду существующего сайта index.html + деплою на Vercel.

КРИТИЧНО:
- НЕ переделывай сайт с нуля — точечные добавления в существующий 1612-строчный index.html
- НЕ меняй дизайн-систему (зелёный #2D5A3D, кремовый #FAFAF8, Cormorant Garamond + Inter)
- НЕ удаляй существующие 4 пакета и 6 кейсов — добавляешь новое
- Используй существующие CSS-классы (.offer, .case, .btn-primary, .guarantee-box и т.д.)

Порядок:
TASK-8 (стили: Inter, терракот, воздух) → TASK-1 (Fractional) → TASK-2 (Audit) → TASK-3 (кейсы Перия+Rentra) → TASK-4 (Telegram-деплинки + своя форма с TG-ботом) → TASK-5 (Proof) → TASK-6 (FAQ) → TASK-7 (Vercel deploy)

⚠️ TASK-8 делать ПЕРВЫМ — обновлённая палитра и шрифты применятся ко всем новым блокам автоматически.

Один атомарный коммит на задачу. // CODEX_TODO: при блокерах (например, Calendly URL — placeholder).

VERCEL DEPLOY (TASK-7):
- Проект уже залинкован в .vercel/project.json (projectId prj_cuLltYU3Y9BKE55J6w0dYlv6tp6e)
- Vercel CLI авторизован в AppData/Roaming/com.vercel.cli/Data/auth.json — токены сами подхватятся
- Команды: `vercel --version` → если нет: `npm i -g vercel@latest` → `vercel --prod --yes`
- Если что-то пошло не так — `vercel link --yes` потом `vercel --prod --yes`
- ОБЯЗАТЕЛЬНО: в финальном отчёте укажи production URL который вернул Vercel (формат https://...vercel.app или https://chizhevskaya.pro)

В конце:
1. Список 7 коммитов
2. **PRODUCTION URL** — ссылка на задеплоенный сайт (выделить жирным)
3. Что осталось в CODEX_TODO (например, Calendly URL — placeholder если не подставлен)
4. Проверка после деплоя: открой production URL и убедись что 7 секций рендерятся (HERO с «6 AI-продуктов», Cases с Rentra первой и Перией, 5 пакетов Offers включая Fractional и Audit, Calendly виджет грузится, FAQ +3 вопроса)
5. Build time и status Vercel deploy
```
