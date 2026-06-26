/* ============================================
   HONATU – Navbar Controller
   ============================================ */

export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const heroSection = document.getElementById('hero');

  const updateNavbar = () => {
    if (!navbar || !heroSection) return;
    const scrolled = window.scrollY > heroSection.offsetHeight * 0.3;
    navbar.classList.toggle('navbar--transparent', !scrolled);
    navbar.classList.toggle('navbar--solid', scrolled);
  };

  if (navbar && heroSection) {
    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
  }

  // Mobile hamburger menu
  const hamburger = document.getElementById('navHamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('is-active');
      navMenu.classList.toggle('is-open');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        navMenu.classList.remove('is-open');
      });
    });
  }
}
