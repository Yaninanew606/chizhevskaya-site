(function () {
  'use strict';

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
