/* ============================================
   HONATU – Loader & Page Transition Controller
   ============================================ */

export function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  // Smoothly hide loader after page load
  const hideLoader = () => {
    loader.classList.add('loader--hide');
    loader.setAttribute('aria-hidden', 'true');
  };

  // Hide after loading animation
  setTimeout(hideLoader, 500);

  // Trigger loader on page tab transitions
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Check if it's a page navigation (contains .html or goes to index/pages without hash only)
    const isExternal = href.startsWith('http://') || href.startsWith('https://') || link.target === '_blank';
    const isAnchorOnly = href.startsWith('#') || href.startsWith('javascript:');

    if (!isExternal && !isAnchorOnly) {
      // Show loader during transition to new page
      loader.classList.remove('loader--hide');
      loader.setAttribute('aria-hidden', 'false');
    }
  });
}
