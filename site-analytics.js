(function () {
  'use strict';

  function installSiteShell() {
    if (!document.querySelector('link[data-site-shell], link[href="/site-shell.css"], link[href$="section-pages.css"]')) {
      var stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = '/site-shell.css';
      stylesheet.dataset.siteShell = 'true';
      document.head.appendChild(stylesheet);
    }

    var oldNav = document.querySelector('body > nav');
    var oldFooter = document.querySelector('body > footer');
    var header = document.createElement('header');
    header.className = 'site-header';
    header.innerHTML = '<div class="site-header-inner">' +
      '<a class="site-logo" href="/">Chizhevskaya</a>' +
      '<button class="site-menu-toggle" type="button" aria-label="Открыть меню" aria-expanded="false"><span></span><span></span><span></span></button>' +
      '<nav class="site-nav" aria-label="Основная навигация">' +
      '<a href="/services/mini-apps-for-bloggers">White Label</a>' +
      '<a href="/services">Стоимость</a>' +
      '<a href="/cases">Кейсы</a>' +
      '<a href="/products">Продукты</a>' +
      '<a href="/about">Обо мне</a>' +
      '<a href="/blog">Блог</a>' +
      '<a class="site-nav-cta" href="/contact" data-ym-goal="header_contact">Обсудить приложение</a>' +
      '</nav></div>';
    if (document.documentElement.lang === 'en') {
      header.innerHTML = header.innerHTML
        .replace('Стоимость', 'Pricing').replace('Кейсы', 'Cases').replace('Продукты', 'Products')
        .replace('Обо мне', 'About').replace('Блог', 'Blog').replace('Обсудить приложение', 'Discuss a product')
        .replace('Открыть меню', 'Open menu');
    }
    if (oldNav) oldNav.replaceWith(header);
    else document.body.insertBefore(header, document.body.firstChild);

    var footer = document.createElement('footer');
    footer.className = 'site-footer';
    footer.innerHTML = '<div class="site-footer-inner"><div class="site-footer-grid">' +
      '<div><a class="site-logo" href="/">Chizhevskaya</a><p class="site-footer-about">White Label AI-приложения и цифровые продукты под брендом эксперта или компании — от идеи до запуска и сопровождения.</p></div>' +
      '<div><h2>Работа со мной</h2><div class="site-footer-links"><a href="/services/mini-apps-for-bloggers">White Label</a><a href="/services">Стоимость</a><a href="/partnerships">Партнёрство</a><a href="/cases">Кейсы</a><a href="/documents/white-label-ai-development-agreement-template.docx" download data-ym-goal="contract_docx_download">Шаблон договора (.docx)</a><a href="/documents/white-label-ai-development-agreement-template.pdf" download data-ym-goal="contract_pdf_download">Договор в PDF</a></div></div>' +
      '<div><h2>Экосистема</h2><div class="site-footer-links"><a href="/products">Продукты</a><a href="/about">Обо мне</a><a href="/blog">Блог</a><a href="/resume.html">Резюме</a></div></div>' +
      '<div><h2>Связаться</h2><div class="site-footer-links"><a href="/contact">Все контакты</a><a href="https://t.me/yanina_ai" target="_blank" rel="noopener">Telegram</a><a href="https://vk.ru/yanina_new666" target="_blank" rel="noopener">ВКонтакте</a><a href="mailto:chizhevskaya86@gmail.com">Email</a></div></div>' +
      '</div><div class="site-footer-meta"><span>© 2026 Янина Чижевская</span><span>Product Owner и разработчик AI-продуктов</span></div></div>';
    if (document.documentElement.lang === 'en') {
      footer.innerHTML = footer.innerHTML
        .replace('White Label AI-приложения и цифровые продукты под брендом эксперта или компании — от идеи до запуска и сопровождения.', 'White Label AI applications and digital products under your brand — from idea to launch and support.')
        .replace('Работа со мной', 'Work with me').replace('Стоимость', 'Pricing').replace('Партнёрство', 'Partnerships').replace('Кейсы', 'Cases')
        .replace('Шаблон договора (.docx)', 'Contract template (.docx)').replace('Договор в PDF', 'Contract PDF')
        .replace('Экосистема', 'Explore').replace('Продукты', 'Products').replace('Обо мне', 'About').replace('Блог', 'Blog').replace('Резюме', 'Resume')
        .replace('Связаться', 'Contact').replace('Все контакты', 'All contacts').replace('ВКонтакте', 'VK')
        .replace('Янина Чижевская', 'Yanina Chizhevskaya').replace('Product Owner и разработчик AI-продуктов', 'Product Owner and AI product engineer');
    }
    if (oldFooter) oldFooter.replaceWith(footer);
    else document.body.appendChild(footer);

    var path = window.location.pathname.replace(/\/$/, '') || '/';
    header.querySelectorAll('.site-nav a').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === path || (href !== '/' && path.indexOf(href + '/') === 0)) link.setAttribute('aria-current', 'page');
    });

    var toggle = header.querySelector('.site-menu-toggle');
    var menu = header.querySelector('.site-nav');
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Открыть меню');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', installSiteShell, { once: true });
  else installSiteShell();

  var counterId = 109180333;
  window.ym = window.ym || function () {
    (window.ym.a = window.ym.a || []).push(arguments);
  };
  window.ym.l = Date.now();

  window.reachGoal = window.reachGoal || function (name, params) {
    try { window.ym(counterId, 'reachGoal', name, params || {}); } catch (error) {}
  };

  window.ym(counterId, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  });

  function loadMetrika() {
    if (document.querySelector('script[data-yandex-metrika]')) return;
    var script = document.createElement('script');
    script.async = true;
    script.dataset.yandexMetrika = 'true';
    script.src = 'https://mc.yandex.ru/metrika/tag.js?id=' + counterId;
    document.head.appendChild(script);
  }

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadMetrika, { timeout: 1800 });
  } else {
    window.addEventListener('load', function () { setTimeout(loadMetrika, 350); }, { once: true });
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a, button');
    if (!link) return;
    var href = link.getAttribute('href') || '';
    var goal = link.getAttribute('data-ym-goal');
    if (goal) window.reachGoal(goal);
    if (href.indexOf('t.me/') !== -1) window.reachGoal('telegram_click');
    else if (href.indexOf('vk.me/') !== -1 || href.indexOf('vk.ru/') !== -1) window.reachGoal('vk_click');
    else if (href.indexOf('max.ru/') !== -1 || href.indexOf('web.max.ru') !== -1) window.reachGoal('max_click');
    else if (href.indexOf('mailto:') === 0) window.reachGoal('email_click');
  });
})();
