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
