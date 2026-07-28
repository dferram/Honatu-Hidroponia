/* ============================================
   HONATU – Auth Controller
   Mock authentication system
   ============================================ */

import { getString, setString, StorageKeys } from '../middleware/storage.middleware.js';
import { showToast } from '../middleware/toast.middleware.js';

let isAuthenticated = getString(StorageKeys.AUTH) === 'true';

export function getIsAuthenticated() {
  return isAuthenticated;
}

export function openLoginModal() {
  const isSubpage = window.location.pathname.includes('/pages/');
  const targetPage = isSubpage ? 'cuenta.html' : './pages/cuenta.html';
  window.location.href = targetPage;
}

export function closeLoginModal() {
  const loginModal = document.getElementById('loginModal');
  const loginOverlay = document.getElementById('loginOverlay');
  loginModal?.classList.remove('active');
  loginOverlay?.classList.remove('active');
  document.body.style.overflow = '';
}

export function initAuth() {
  const userLoginToggle = document.getElementById('userLoginToggle');
  const loginClose = document.getElementById('loginClose');
  const loginOverlay = document.getElementById('loginOverlay');
  const loginForm = document.getElementById('loginForm');

  userLoginToggle?.addEventListener('click', openLoginModal);
  loginClose?.addEventListener('click', closeLoginModal);
  loginOverlay?.addEventListener('click', closeLoginModal);

  loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    isAuthenticated = true;
    setString(StorageKeys.AUTH, 'true');
    closeLoginModal();
    showToast("¡Sesión iniciada con éxito! Ya puedes comprar.");
  });
}
