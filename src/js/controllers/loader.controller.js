/* ============================================
   HONATU – Loader Controller
   ============================================ */

export function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  const hideLoader = () => {
    loader.classList.add('loader--hide');
    loader.setAttribute('aria-hidden', 'true');
    loader.addEventListener('transitionend', () => {
      loader.remove();
    }, { once: true });
  };

  setTimeout(hideLoader, 1800);
}
