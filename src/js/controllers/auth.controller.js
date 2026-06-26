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
  if (isAuthenticated) {
    showToast("Ya has iniciado sesión. (Perfil Mock)");
    return;
  }
  const loginModal = document.getElementById('loginModal');
  const loginOverlay = document.getElementById('loginOverlay');
  loginModal?.classList.add('active');
  loginOverlay?.classList.add('active');
  document.body.style.overflow = 'hidden';
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
