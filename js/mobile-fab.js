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
window.addEventListener("load", function () {

  if (window.innerWidth <= 767) {

    if (!sessionStorage.getItem("scPopupShown")) {

      const popup = document.getElementById("sc-popup-overlay");

      setTimeout(function () {

        popup.classList.remove("sc-hidden");

        requestAnimationFrame(() => {
          popup.classList.add("sc-visible");
        });

      }, 1500);

      sessionStorage.setItem("scPopupShown", "true");
    }
  }

  const closeBtn = document.getElementById("sc-popup-close");

  if (closeBtn) {

    closeBtn.addEventListener("click", function () {

      const popup = document.getElementById("sc-popup-overlay");

      popup.classList.remove("sc-visible");

      setTimeout(() => {
        popup.classList.add("sc-hidden");
      }, 300);

    });

  }

});
// Pop-up Ends
