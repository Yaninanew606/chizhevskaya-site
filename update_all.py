import os

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(path, content):
    with open(path, 'w', encoding='utf-8', newline='\n') as f:
        f.write(content)

# 1. Update index.html
index_path = 'index.html'
index_content = read_file(index_path)

popup_old = '''  <style>
    .hot-offer-popover{position:fixed;inset:0;z-index:1000;display:grid;place-items:center;padding:20px;background:rgba(23,35,30,.62);opacity:0;visibility:hidden;transition:opacity .25s ease,visibility .25s ease}
    .hot-offer-popover.is-visible{opacity:1;visibility:visible}
    .hot-offer-card{position:relative;isolation:isolate;overflow:hidden;width:min(920px,100%);min-height:430px;padding:58px clamp(30px,8vw,120px);display:flex;align-items:center;justify-content:center;text-align:center;color:#17231e;border:1px solid #d8d1c4;box-shadow:0 24px 80px rgba(0,0,0,.22);background:#f6f2e9 url('/hot-offer-banner.jpg') center/cover no-repeat}
    .hot-offer-card::before{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(246,242,233,.84) 0%,rgba(246,242,233,.94) 22%,rgba(246,242,233,.95) 50%,rgba(246,242,233,.94) 78%,rgba(246,242,233,.84) 100%)}
    .hot-offer-card::after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,rgba(246,242,233,.18),rgba(246,242,233,.42))}
    .hot-offer-content{max-width:620px}
    .hot-offer-card h2{margin:0 0 12px;font:400 clamp(32px,5vw,62px)/.98 Georgia,serif;letter-spacing:-.04em}
    .hot-offer-card p{margin:0 auto 24px;max-width:520px;color:#536159;line-height:1.55;font-size:17px}
    .hot-offer-card a{display:inline-flex;align-items:center;justify-content:center;padding:15px 28px;background:#3f5b4b;color:#fff;font-weight:750;text-decoration:none}
    .hot-offer-close{position:absolute;z-index:2;top:12px;right:14px;border:0;background:rgba(246,242,233,.72);color:#536159;font-size:28px;line-height:1;cursor:pointer}
    @media(max-width:620px){.hot-offer-card{min-height:500px;padding:62px 22px 34px;background-position:58% center}.hot-offer-card::before{background:rgba(246,242,233,.86)}.hot-offer-card p{font-size:15px}}
  </style>
  <div class="hot-offer-popover" id="hotOfferPopover" role="dialog" aria-modal="true" aria-labelledby="hotOfferTitle">
    <div class="hot-offer-card">
      <button class="hot-offer-close" id="closeHotOffer" type="button" aria-label="Закрыть предложение">×</button>
      <div class="hot-offer-content">
        <div class="eyebrow">Ограниченный набор</div>
        <h2 id="hotOfferTitle">Собственная экосистема продуктов</h2>
        <p>Книга, Mini App и SEO-сайт под вашим брендом. На странице hot offer — условия, форматы и предоплата.</p>
        <a href="/hot-offer">Подробнее →</a>
      </div>
    </div>
  </div>'''

popup_new = '''  <style>
    .hot-offer-popover{position:fixed;inset:0;z-index:1000;display:grid;place-items:center;padding:15px;background:rgba(23,35,30,.62);opacity:0;visibility:hidden;transition:opacity .25s ease,visibility .25s ease}
    .hot-offer-popover.is-visible{opacity:1;visibility:visible}
    .hot-offer-card{position:relative;display:grid;grid-template-columns:1fr 1fr;width:min(900px,100%);min-height:420px;color:#17231e;border:1px solid #d8d1c4;box-shadow:0 24px 80px rgba(0,0,0,.22);background:#f6f2e9;border-radius:6px;overflow:hidden}
    .hot-offer-left{padding:40px clamp(24px,5vw,56px);display:flex;flex-direction:column;justify-content:center}
    .hot-offer-badge{display:inline-block;padding:6px 14px;border:1px solid #c2b9a8;border-radius:99px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#536159;margin-bottom:20px;align-self:flex-start}
    .hot-offer-card h2{margin:0 0 14px;font:400 clamp(28px,3.8vw,48px)/.98 Georgia,serif;letter-spacing:-.04em;color:#17231e}
    .hot-offer-card p{margin:0 0 28px;color:#536159;line-height:1.6;font-size:15px}
    .hot-offer-cta{display:inline-flex;align-items:center;gap:8px;padding:15px 28px;background:#3f5b4b;color:#fff;font-weight:700;font-size:15px;text-decoration:none;border-radius:4px;transition:background .2s;align-self:flex-start}
    .hot-offer-cta:hover{background:#2d4436}
    .hot-offer-right{position:relative;overflow:hidden;min-height:320px}
    .hot-offer-right img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center}
    .hot-offer-close{position:absolute;z-index:10;top:12px;right:14px;border:0;background:rgba(246,242,233,.85);color:#536159;font-size:26px;line-height:1;width:34px;height:34px;cursor:pointer;border-radius:50%;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px)}
    .hot-offer-close:hover{background:#fff;color:#17231e}
    @media(max-width:640px){
      .hot-offer-card{grid-template-columns:1fr}
      .hot-offer-right{min-height:200px;order:-1}
      .hot-offer-left{padding:24px 20px 28px}
      .hot-offer-card h2{font-size:clamp(24px,8vw,32px);margin-bottom:10px}
      .hot-offer-card p{font-size:14px;margin-bottom:20px}
      .hot-offer-badge{margin-bottom:12px}
      .hot-offer-cta{width:100%;justify-content:center}
    }
  </style>
  <div class="hot-offer-popover" id="hotOfferPopover" role="dialog" aria-modal="true" aria-labelledby="hotOfferTitle">
    <div class="hot-offer-card">
      <button class="hot-offer-close" id="closeHotOffer" type="button" aria-label="Закрыть предложение">×</button>
      <div class="hot-offer-left">
        <span class="hot-offer-badge">Ограниченный набор</span>
        <h2 id="hotOfferTitle">Собственная экосистема продуктов</h2>
        <p>Книга, Mini App и SEO-сайт под вашим брендом. Условия, форматы и предоплата — на странице Hot Offer.</p>
        <a class="hot-offer-cta" href="/hot-offer">Подробнее →</a>
      </div>
      <div class="hot-offer-right">
        <img src="/popup-visual.jpg" alt="Книга, ноутбук и мобильное приложение — экосистема продуктов" loading="eager">
      </div>
    </div>
  </div>'''

index_content = index_content.replace(popup_old, popup_new)

nav_old = '''<!-- NAV -->
<nav>
  <div class="nav-inner">
    <a href="#" class="logo">Chizhevskaya</a>
    <button type="button" class="burger" aria-label="Меню" aria-expanded="false" id="burgerBtn">
      <span></span><span></span><span></span>
    </button>
    <div class="nav-links" id="navLinks">
      <a href="/services">Услуги</a>
      <a href="/hot-offer">Hot offer</a>
      <a href="/products">Продукты</a>
      <a href="/partnerships">Партнёрство</a>
      <a href="/cases">Кейсы</a>
      <a href="/blog">Блог</a>
      <span class="lang-switch">
        <a href="/" class="active" aria-current="page">RU</a>
        <span class="sep">·</span>
        <a href="/en" hreflang="en">EN</a>
      </span>
      <a href="https://t.me/yanina_ai?text=Бесплатный%20AI-аудит" class="btn-nav">Бесплатный AI-аудит</a>
    </div>
  </div>
</nav>'''

nav_new = '''<!-- NAV -->
<style>
  .site-topnav{position:sticky;top:0;z-index:200;border-bottom:1px solid rgba(23,35,30,.12);background:rgba(245,241,232,.95);backdrop-filter:blur(16px)}
  .site-topnav-inner{display:flex;align-items:center;justify-content:space-between;min-height:68px;padding:0 clamp(20px,4vw,44px);max-width:1200px;margin:0 auto;gap:20px}
  .site-topnav .s-logo{font:700 26px/1 'Cormorant Garamond',Georgia,serif;color:#17231e;text-decoration:none}
  .site-topnav .s-links{display:flex;align-items:center;gap:24px;font-size:13px;font-weight:600}
  .site-topnav .s-links a{color:#17231e;text-decoration:none}
  .site-topnav .s-links a:hover{color:#b85d3b}
  .site-topnav .s-hot{color:#b85d3b!important;font-weight:700}
  .site-topnav .s-cta{padding:10px 18px;border-radius:999px;background:#3f5b4b;color:#fff!important;font-weight:700;transition:background .2s}
  .site-topnav .s-cta:hover{background:#2d4436!important}
  .site-topnav .s-burger{display:none;width:40px;height:40px;background:transparent;border:1px solid rgba(23,35,30,.18);border-radius:50%;cursor:pointer;padding:0;flex-shrink:0}
  .site-topnav .s-burger span{display:block;width:16px;height:1.5px;margin:4px auto;background:#17231e;transition:.2s}
  .site-topnav .s-burger[aria-expanded="true"] span:nth-child(1){transform:translateY(5.5px) rotate(45deg)}
  .site-topnav .s-burger[aria-expanded="true"] span:nth-child(2){opacity:0}
  .site-topnav .s-burger[aria-expanded="true"] span:nth-child(3){transform:translateY(-5.5px) rotate(-45deg)}
  @media(max-width:860px){
    .site-topnav .s-burger{display:block}
    .site-topnav .s-links{display:none;position:fixed;inset:68px 0 auto;flex-direction:column;align-items:stretch;padding:16px 22px 24px;background:rgba(245,241,232,.98);border-bottom:1px solid rgba(23,35,30,.12);box-shadow:0 20px 50px rgba(23,35,30,.1);gap:0;z-index:199}
    .site-topnav .s-links.is-open{display:flex}
    .site-topnav .s-links a{padding:11px 0;font-size:15px;border-bottom:1px solid rgba(23,35,30,.08)}
    .site-topnav .s-links a:last-child{border:0;margin-top:8px;justify-content:center}
  }
</style>
<nav class="site-topnav" aria-label="Основная навигация">
  <div class="site-topnav-inner">
    <a class="s-logo" href="/">Chizhevskaya</a>
    <button class="s-burger" id="mainNavBurger" type="button" aria-label="Меню" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <div class="s-links" id="mainNavLinks">
      <a href="/services">Услуги</a>
      <a class="s-hot" href="/hot-offer">Hot Offer 🔥</a>
      <a href="/products">Продукты</a>
      <a href="/partnerships">Партнёрство</a>
      <a href="/cases">Кейсы</a>
      <a href="/blog">Блог</a>
      <a class="s-cta" href="https://t.me/yanina_ai?text=Хочу%20обсудить%20проект" target="_blank" rel="noopener">Обсудить →</a>
    </div>
  </div>
</nav>'''
index_content = index_content.replace(nav_old, nav_new)
write_file(index_path, index_content)

# 2. Update section-pages.css
css_path = 'section-pages.css'
css_content = read_file(css_path)

css_old_links = '.nav-links { display: flex; align-items: center; gap: 22px; font-size: 14px; }\\n.nav-links a:hover, .nav-links a[aria-current="page"] { color: var(--terra); }\\n.nav-cta { padding: 10px 16px; border-radius: 999px; background: var(--green); color: #fff !important; font-weight: 700; }'

css_new_links = '.nav-links { display: flex; align-items: center; gap: 22px; font-size: 14px; }\\n.nav-links a:hover, .nav-links a[aria-current="page"] { color: var(--terra); }\\n.nav-cta { padding: 10px 16px; border-radius: 999px; background: var(--green); color: #fff !important; font-weight: 700; }\\n.nav-burger { display: none; width: 40px; height: 40px; background: transparent; border: 1px solid var(--line); border-radius: 50%; cursor: pointer; padding: 0; flex-shrink: 0; }\\n.nav-burger span { display: block; width: 18px; height: 1.5px; margin: 4px auto; background: var(--ink); transition: .2s ease; }\\n.nav-burger[aria-expanded="true"] span:nth-child(1) { transform: translateY(5.5px) rotate(45deg); }\\n.nav-burger[aria-expanded="true"] span:nth-child(2) { opacity: 0; }\\n.nav-burger[aria-expanded="true"] span:nth-child(3) { transform: translateY(-5.5px) rotate(-45deg); }'

css_content = css_content.replace('.nav-links { display: flex; align-items: center; gap: 22px; font-size: 14px; }\n.nav-links a:hover, .nav-links a[aria-current="page"] { color: var(--terra); }\n.nav-cta { padding: 10px 16px; border-radius: 999px; background: var(--green); color: #fff !important; font-weight: 700; }', 
'.nav-links { display: flex; align-items: center; gap: 22px; font-size: 14px; }\n.nav-links a:hover, .nav-links a[aria-current="page"] { color: var(--terra); }\n.nav-cta { padding: 10px 16px; border-radius: 999px; background: var(--green); color: #fff !important; font-weight: 700; }\n.nav-burger { display: none; width: 40px; height: 40px; background: transparent; border: 1px solid var(--line); border-radius: 50%; cursor: pointer; padding: 0; flex-shrink: 0; }\n.nav-burger span { display: block; width: 18px; height: 1.5px; margin: 4px auto; background: var(--ink); transition: .2s ease; }\n.nav-burger[aria-expanded="true"] span:nth-child(1) { transform: translateY(5.5px) rotate(45deg); }\n.nav-burger[aria-expanded="true"] span:nth-child(2) { opacity: 0; }\n.nav-burger[aria-expanded="true"] span:nth-child(3) { transform: translateY(-5.5px) rotate(-45deg); }')

css_old_media = '''@media (max-width: 700px) {
  .container { width: min(var(--max), calc(100% - 32px)); }
  .nav-links a:not(.nav-cta) { display: none; }
  .hero { padding: 56px 0 72px; }'''

css_new_media = '''@media (max-width: 700px) {
  .container { width: min(var(--max), calc(100% - 32px)); }
  .nav-burger { display: block; }
  .nav-links { position: fixed; inset: 72px 0 auto; display: none; flex-direction: column; align-items: stretch; padding: 18px 22px 24px; border-bottom: 1px solid var(--line); background: rgba(245,241,232,.97); box-shadow: 0 20px 50px rgba(23,63,43,.1); gap: 0; }
  .nav-links.is-open { display: flex; }
  .nav-links a { padding: 11px 0; font-size: 16px; border-bottom: 1px solid var(--line); }
  .nav-links a:last-child { border-bottom: 0; }
  .nav-cta { margin-top: 8px; justify-content: center; text-align: center; }
  .hero { padding: 56px 0 72px; }'''

css_content = css_content.replace(css_old_media, css_new_media)
write_file(css_path, css_content)


# 3. Update section pages
pages = ['about.html', 'cases.html', 'blog.html', 'partnerships.html', 'services.html', 'products.html']
burger_js = """<script>
(function(){
  var btn=document.getElementById('navBurger');
  var links=document.querySelector('.nav-links');
  if(!btn||!links)return;
  btn.addEventListener('click',function(){
    var open=links.classList.toggle('is-open');
    btn.setAttribute('aria-expanded',open);
  });
  document.addEventListener('click',function(e){
    if(!btn.contains(e.target)&&!links.contains(e.target)){
      links.classList.remove('is-open');
      btn.setAttribute('aria-expanded','false');
    }
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){links.classList.remove('is-open');btn.setAttribute('aria-expanded','false');}
  });
})();
</script>"""

for p in pages:
    content = read_file(p)
    if '<nav></nav>' in content:
        content = content.replace('<nav></nav>', '')
    
    if 'nav-burger' not in content:
        content = content.replace('<div class="nav-links">', '<button class="nav-burger" id="navBurger" type="button" aria-label="Меню" aria-expanded="false"><span></span><span></span><span></span></button><div class="nav-links">')
    
    if 'navBurger' not in content or 'addEventListener' not in content[content.rfind('navBurger'):]:
        content = content.replace('</body>', burger_js + '\\n</body>')
    
    content = content.replace('<a href="/hot-offer">Hot offer</a>', '<a href="/hot-offer" style="color:#b85d3b;font-weight:700">Hot Offer 🔥</a>')

    write_file(p, content)

# 4. Update hot-offer.html
hot_path = 'hot-offer.html'
hot_content = read_file(hot_path)

hot_old_topbar = '<header class="topbar"><a class="brand" href="/" aria-label="На главную"><span class="mark">C</span> CHIZHEVSKAYA</a><span class="top-note">Осенний набор · 2026</span><a class="top-link" href="#start">Обсудить проект →</a></header>'

hot_new_nav = '''<style>
.site-topnav{position:sticky;top:0;z-index:200;border-bottom:1px solid rgba(23,35,30,.12);background:rgba(245,241,232,.95);backdrop-filter:blur(16px)}
.site-topnav-inner{display:flex;align-items:center;justify-content:space-between;min-height:60px;padding:0 28px;max-width:1500px;margin:0 auto;gap:20px}
.site-topnav .logo{font:700 22px/1 Georgia,serif;color:#17231e;text-decoration:none}
.site-topnav .nav-links{display:flex;align-items:center;gap:20px;font-size:13px}
.site-topnav .nav-links a{color:#17231e;text-decoration:none;font-weight:500}
.site-topnav .nav-links a:hover{color:#b85d3b}
.site-topnav .nav-links a[aria-current="page"]{color:#b85d3b;font-weight:700}
.site-topnav .nav-cta-btn{padding:9px 16px;border-radius:999px;background:#3f5b4b;color:#fff!important;font-weight:700}
.site-topnav .nav-burger{display:none;width:38px;height:38px;background:transparent;border:1px solid rgba(23,35,30,.18);border-radius:50%;cursor:pointer;padding:0}
.site-topnav .nav-burger span{display:block;width:16px;height:1.5px;margin:4px auto;background:#17231e;transition:.2s}
.site-topnav .nav-burger[aria-expanded="true"] span:nth-child(1){transform:translateY(5.5px) rotate(45deg)}
.site-topnav .nav-burger[aria-expanded="true"] span:nth-child(2){opacity:0}
.site-topnav .nav-burger[aria-expanded="true"] span:nth-child(3){transform:translateY(-5.5px) rotate(-45deg)}
@media(max-width:700px){
  .site-topnav .nav-burger{display:block}
  .site-topnav .nav-links{display:none;position:fixed;inset:60px 0 auto;flex-direction:column;padding:16px 22px 22px;background:rgba(245,241,232,.98);border-bottom:1px solid rgba(23,35,30,.12);box-shadow:0 20px 40px rgba(23,35,30,.1);gap:0}
  .site-topnav .nav-links.is-open{display:flex}
  .site-topnav .nav-links a{padding:10px 0;font-size:15px;border-bottom:1px solid rgba(23,35,30,.08)}
  .site-topnav .nav-links a:last-child{border:0}
}
</style>
<nav class="site-topnav" aria-label="Основная навигация">
  <div class="site-topnav-inner">
    <a class="logo" href="/">Chizhevskaya</a>
    <button class="nav-burger" id="hotOfferNavBurger" type="button" aria-label="Меню" aria-expanded="false"><span></span><span></span><span></span></button>
    <div class="nav-links" id="hotOfferNavLinks">
      <a href="/services">Услуги</a>
      <a href="/hot-offer" aria-current="page">Hot Offer 🔥</a>
      <a href="/products">Продукты</a>
      <a href="/partnerships">Партнёрство</a>
      <a href="/cases">Кейсы</a>
      <a href="/blog">Блог</a>
      <a class="nav-cta-btn" href="https://t.me/yanina_ai?text=Хочу%20обсудить%20проект" target="_blank" rel="noopener">Обсудить →</a>
    </div>
  </div>
</nav>
<header class="topbar"><a class="brand" href="/" aria-label="На главную"><span class="mark">C</span> CHIZHEVSKAYA</a><span class="top-note">Осенний набор · 2026</span><a class="top-link" href="#start">Обсудить проект →</a></header>'''

hot_js = '''<script>
(function(){
  var btn=document.getElementById('hotOfferNavBurger');
  var links=document.getElementById('hotOfferNavLinks');
  if(!btn||!links)return;
  btn.addEventListener('click',function(){
    var open=links.classList.toggle('is-open');
    btn.setAttribute('aria-expanded',open);
  });
  document.addEventListener('click',function(e){
    if(!btn.contains(e.target)&&!links.contains(e.target)){
      links.classList.remove('is-open');btn.setAttribute('aria-expanded','false');
    }
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'){links.classList.remove('is-open');btn.setAttribute('aria-expanded','false');}
  });
})();
</script>'''

if hot_old_topbar in hot_content:
    hot_content = hot_content.replace(hot_old_topbar, hot_new_nav)
    if 'hotOfferNavBurger' not in hot_content or 'addEventListener' not in hot_content[hot_content.rfind('hotOfferNavBurger'):]:
        hot_content = hot_content.replace('</body>', hot_js + '\\n</body>')
    write_file(hot_path, hot_content)
