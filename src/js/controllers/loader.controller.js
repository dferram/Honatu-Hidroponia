/* ============================================
   HONATU – Loader & Page Transition Controller
   ============================================ */

import logoImg from '../../assets/logo/Logo.png';

export function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  // Ensure loader logo uses bundled asset
  const loaderImg = loader.querySelector('.loader-logo');
  if (loaderImg) {
    loaderImg.src = logoImg;
  }

  // Smoothly hide loader after page load
  const hideLoader = () => {
    if (!loader.classList.contains('loader--hide')) {
      loader.classList.add('loader--hide');
      loader.setAttribute('aria-hidden', 'true');
    }
  };

  // Immediate and timed safety nets to ensure loader ALWAYS hides
  if (document.readyState === 'complete') {
    setTimeout(hideLoader, 200);
  } else {
    window.addEventListener('load', () => setTimeout(hideLoader, 250));
    // Fallback timer so it never gets stuck regardless of asset loading state
    setTimeout(hideLoader, 400);
  }

  // Handle back/forward cache navigation
  window.addEventListener('pageshow', () => {
    hideLoader();
  });

  // Trigger loader on page tab transitions
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Check if it's a real navigation to another page
    const isExternal = href.startsWith('http://') || href.startsWith('https://') || link.target === '_blank' || href.startsWith('mailto:') || href.startsWith('tel:');
    const isAnchorOnly = href.startsWith('#') || href.startsWith('javascript:');

    if (!isExternal && !isAnchorOnly) {
      loader.classList.remove('loader--hide');
      loader.setAttribute('aria-hidden', 'false');
      // Safety timeout: if page change doesn't happen, hide it after 1.5s
      setTimeout(hideLoader, 1500);
    }
  });
}
