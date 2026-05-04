document.addEventListener('DOMContentLoaded', () => {
  const fab = document.getElementById('mobileFab');
  if (!fab) return;

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 150) {
      fab.classList.add('show');
    }

    if (currentScroll > lastScroll && currentScroll > 300) {
      fab.classList.add('hide');
      fab.classList.remove('show');
    } else {
      fab.classList.remove('hide');
      fab.classList.add('show');
    }

    lastScroll = currentScroll;
  });
});
// Pop-up Starts
(function () {

  var COMING_SOON_URL = 'YOUR_COMING_SOON_PAGE_URL';
  var DELAY_MS = 2500;
  var COOKIE_DAYS = 3;

  function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + days * 864e5);
    document.cookie = name + '=' + value + ';expires=' + d.toUTCString() + ';path=/';
  }

  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

  function showPopup() {
    var overlay = document.getElementById('sc-popup-overlay');
    overlay.classList.remove('sc-hidden');
    requestAnimationFrame(() => {
      overlay.classList.add('sc-visible');
    });
  }

  function hidePopup(dismiss) {
    var overlay = document.getElementById('sc-popup-overlay');
    overlay.classList.remove('sc-visible');
    setTimeout(() => overlay.classList.add('sc-hidden'), 380);

    if (dismiss) setCookie('sc_popup_dismissed', '1', COOKIE_DAYS);
  }

  function init() {
    if (getCookie('sc_popup_dismissed')) return;

    var cta = document.getElementById('sc-popup-cta');
    if (cta && COMING_SOON_URL !== 'YOUR_COMING_SOON_PAGE_URL') {
      cta.href = COMING_SOON_URL;
    }

    setTimeout(showPopup, DELAY_MS);

    document.getElementById('sc-popup-close')
      .addEventListener('click', () => hidePopup(false));

    document.getElementById('sc-popup-dismiss')
      .addEventListener('click', () => hidePopup(true));

    document.getElementById('sc-popup-overlay')
      .addEventListener('click', function (e) {
        if (e.target === this) hidePopup(false);
      });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') hidePopup(false);
    });
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();

})();
// Pop-up Ends
