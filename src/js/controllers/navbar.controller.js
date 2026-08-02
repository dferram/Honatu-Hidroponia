/* ============================================
   HONATU – Navbar Controller
   ============================================ */

import { renderHeader } from '../components/header.component.js';
import { isSubpageView } from '../components/footer.component.js';

export function initNavbar() {
  let navbar = document.getElementById('navbar') || document.querySelector('honatu-header, nav.navbar');
  
  if (navbar) {
    // If the navbar is empty or a placeholder, render the unified header HTML
    if (navbar.children.length === 0 || navbar.innerHTML.trim() === '') {
      renderHeader(navbar);
    }
  }

  // Refresh reference
  navbar = document.getElementById('navbar') || document.querySelector('honatu-header, nav.navbar');
  if (!navbar) return;

  const isSubpage = isSubpageView();
  const heroSection = document.getElementById('hero');

  if (isSubpage || !heroSection) {
    navbar.classList.remove('navbar--transparent');
    navbar.classList.add('navbar--solid');
  } else {
    const updateNavbar = () => {
      const scrolled = window.scrollY > heroSection.offsetHeight * 0.3;
      navbar.classList.toggle('navbar--transparent', !scrolled);
      navbar.classList.toggle('navbar--solid', scrolled);
    };
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

    navMenu.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        navMenu.classList.remove('is-open');
      });
    });
  }
}

