# chizhevskaya.pro

Личный сайт-портфолио Янины Чижевской.

## Структура
- `index.html` — весь сайт в одном файле (HTML + CSS + JS inline)
- `vercel.json` — конфиг Vercel (cleanUrls + security headers)

## Деплой на Vercel (бесплатно)

### Вариант 1 — через веб-интерфейс (проще)
1. Зайти на https://vercel.com/new
2. Нажать "Deploy without Git" или перетащить папку
3. Загрузить папку `chizhevskaya-site`
4. Подключить домен `chizhevskaya.pro` в Settings → Domains

### Вариант 2 — через CLI
```bash
npm i -g vercel
cd chizhevskaya-site
vercel --prod
```

## DNS-записи на reg.ru

Для корневого домена `chizhevskaya.pro`:
- **Тип:** A
- **Имя:** @ (или пусто)
- **Значение:** `76.76.21.21`

Для `www.chizhevskaya.pro`:
- **Тип:** CNAME
- **Имя:** www
- **Значение:** `cname.vercel-dns.com`

После добавления записей подождать 5–30 минут на распространение DNS.
