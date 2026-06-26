/* ============================================
   HONATU – App Entry Point
   Bootstraps all controllers and middleware
   ============================================ */

// --- Middleware ---
import { initRevealAnimations, initCounters, injectFilterAnimation } from './middleware/animations.middleware.js';
import './middleware/toast.middleware.js'; // self-registers showToast globally

// --- Controllers ---
import { initLoader } from './controllers/loader.controller.js';
import { initNavbar } from './controllers/navbar.controller.js';
import { initSmoothScroll, initActiveNavTracking } from './controllers/scroll.controller.js';
import { initAuth } from './controllers/auth.controller.js';
import { initCart } from './controllers/cart.controller.js';
import { initFavorites } from './controllers/favorites.controller.js';
import { initFilters } from './controllers/filters.controller.js';
import { initContactForm } from './controllers/contact.controller.js';

document.addEventListener('DOMContentLoaded', () => {
  // Middleware
  initRevealAnimations();
  initCounters();
  injectFilterAnimation();

  // Controllers
  initLoader();
  initNavbar();
  initSmoothScroll();
  initActiveNavTracking();
  initAuth();
  initCart();
  initFavorites();
  initFilters();
  initContactForm();
});
