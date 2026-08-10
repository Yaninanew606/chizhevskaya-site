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
      '<div><a class="site-logo" href="/">Chizhevskaya</a><p class="site-footer-about">White Label AI-приложения и цифровые продукты под брендом эксперта или компании — от идеи до запуска и сопровождения.</p><p class="site-footer-owner">Янина Чижевская · плательщик НПД<br>Казань · Россия</p></div>' +
      '<div><h2>Сайт</h2><div class="site-footer-links"><a href="/services/mini-apps-for-bloggers">White Label</a><a href="/services">Стоимость</a><a href="/partnerships">Партнёрство</a><a href="/cases">Кейсы</a><a href="/products">Продукты</a><a href="/about">Обо мне</a><a href="/blog">Блог</a></div></div>' +
      '<div><h2>Документы</h2><div class="site-footer-links"><a href="/legal">Правовая информация</a><a href="/privacy">Политика конфиденциальности</a><a href="/personal-data-consent">Согласие на обработку данных</a><a href="/cookies">Cookies</a><a href="/terms">Условия заказа услуг</a><a href="/marketing-consent">Согласие на рекламные сообщения</a><a href="#cookie-settings" data-cookie-settings>Настроить cookies</a><a href="/documents/white-label-ai-development-agreement-template.docx" download data-ym-goal="contract_docx_download">Шаблон договора (.docx)</a><a href="/documents/white-label-ai-development-agreement-template.pdf" download data-ym-goal="contract_pdf_download">Договор в PDF</a></div></div>' +
      '<div><h2>Связаться</h2><div class="site-footer-links"><a href="/contact">Все контакты</a><a href="https://t.me/yanina_ai" target="_blank" rel="noopener">Telegram</a><a href="https://vk.ru/yanina_new666" target="_blank" rel="noopener">ВКонтакте</a><a href="mailto:chizhevskaya86@gmail.com">Email</a><a href="tel:+79033870545">+7 903 387-05-45</a></div></div>' +
      '</div><div class="site-footer-meta"><span>© 2026 Янина Чижевская</span><span>Product Owner и разработчик AI-продуктов</span></div></div>';
    if (document.documentElement.lang === 'en') {
      footer.innerHTML = footer.innerHTML
        .replace('White Label AI-приложения и цифровые продукты под брендом эксперта или компании — от идеи до запуска и сопровождения.', 'White Label AI applications and digital products under your brand — from idea to launch and support.')
        .replace('Сайт', 'Explore').replace('Стоимость', 'Pricing').replace('Партнёрство', 'Partnerships').replace('Кейсы', 'Cases')
        .replace('Документы', 'Legal').replace('Правовая информация', 'Legal information').replace('Политика конфиденциальности', 'Privacy policy')
        .replace('Согласие на обработку данных', 'Personal data consent').replace('Условия заказа услуг', 'Service terms').replace('Согласие на рекламные сообщения', 'Marketing consent')
        .replace('Настроить cookies', 'Cookie settings').replace('Шаблон договора (.docx)', 'Contract template (.docx)').replace('Договор в PDF', 'Contract PDF')
        .replace('Продукты', 'Products').replace('Обо мне', 'About').replace('Блог', 'Blog')
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
  var consentKey = 'chz_cookie_consent_v1';
  var analyticsLoaded = false;

  function getCookieConsent() {
    try { return window.localStorage.getItem(consentKey); } catch (error) { return null; }
  }

  function loadMetrika() {
    if (analyticsLoaded || getCookieConsent() !== 'analytics') return;
    analyticsLoaded = true;
    window['disableYaCounter' + counterId] = false;
    window.ym = window.ym || function () {
      (window.ym.a = window.ym.a || []).push(arguments);
    };
    window.ym.l = Date.now();
    window.ym(counterId, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true
    });
    if (document.querySelector('script[data-yandex-metrika]')) return;
    var script = document.createElement('script');
    script.async = true;
    script.dataset.yandexMetrika = 'true';
    script.src = 'https://mc.yandex.ru/metrika/tag.js?id=' + counterId;
    document.head.appendChild(script);
  }

  window.reachGoal = function (name, params) {
    if (getCookieConsent() !== 'analytics' || typeof window.ym !== 'function') return;
    try { window.ym(counterId, 'reachGoal', name, params || {}); } catch (error) {}
  };

  function showCookieBanner(force) {
    var current = document.querySelector('.cookie-consent');
    if (current) current.remove();
    if (!force && getCookieConsent()) return;
    var banner = document.createElement('section');
    banner.className = 'cookie-consent';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Настройки cookies');
    banner.innerHTML = '<div class="cookie-consent-copy"><strong>Cookies и аналитика</strong><p>Необходимые cookies обеспечивают работу сайта. Яндекс Метрика и Вебвизор включатся только с вашего согласия. Поля заявки не записываются.</p><a href="/cookies">Подробнее</a></div><div class="cookie-consent-actions"><button type="button" data-cookie-choice="essential">Только необходимые</button><button type="button" class="cookie-consent-primary" data-cookie-choice="analytics">Разрешить аналитику</button></div>';
    document.body.appendChild(banner);
  }

  function setCookieConsent(choice) {
    try { window.localStorage.setItem(consentKey, choice); } catch (error) {}
    window['disableYaCounter' + counterId] = choice !== 'analytics';
    var banner = document.querySelector('.cookie-consent');
    if (banner) banner.remove();
    if (choice === 'analytics') loadMetrika();
  }

  function initConsent() {
    var choice = getCookieConsent();
    window['disableYaCounter' + counterId] = choice !== 'analytics';
    if (choice === 'analytics') {
      if ('requestIdleCallback' in window) window.requestIdleCallback(loadMetrika, { timeout: 1800 });
      else window.addEventListener('load', function () { setTimeout(loadMetrika, 350); }, { once: true });
    } else if (!choice) {
      showCookieBanner(false);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initConsent, { once: true });
  else initConsent();

  document.addEventListener('click', function (event) {
    var link = event.target.closest('a, button');
    if (!link) return;
    var cookieChoice = link.getAttribute('data-cookie-choice');
    if (cookieChoice) {
      setCookieConsent(cookieChoice);
      return;
    }
    if (link.hasAttribute('data-cookie-settings')) {
      event.preventDefault();
      showCookieBanner(true);
      return;
    }
    var href = link.getAttribute('href') || '';
    var goal = link.getAttribute('data-ym-goal');
    if (goal) window.reachGoal(goal);
    if (href.indexOf('t.me/') !== -1) window.reachGoal('telegram_click');
    else if (href.indexOf('vk.me/') !== -1 || href.indexOf('vk.ru/') !== -1) window.reachGoal('vk_click');
    else if (href.indexOf('max.ru/') !== -1 || href.indexOf('web.max.ru') !== -1) window.reachGoal('max_click');
    else if (href.indexOf('mailto:') === 0) window.reachGoal('email_click');
  });
})();
