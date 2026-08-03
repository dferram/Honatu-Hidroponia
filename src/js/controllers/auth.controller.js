/* ============================================
   HONATU – Auth Controller
   Authentication & Interactive Modal System
   ============================================ */

import logoImg from '../../assets/logo/Logo.png';
import { getString, setString, StorageKeys } from '../middleware/storage.middleware.js';
import { showToast } from '../middleware/toast.middleware.js';

let isAuthenticated = getString(StorageKeys.AUTH) === 'true';
let pendingAuthCallback = null;
let pendingRedirectUrl = null;

export function getIsAuthenticated() {
  return getString(StorageKeys.AUTH) === 'true';
}

const AUTH_VINE_DECORATION = `
<svg style="width:0; height:0; position:absolute;">
  <defs>
    <linearGradient id="leafGradAuth" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4C7838"/>
      <stop offset="60%" stop-color="#6A8D45"/>
      <stop offset="100%" stop-color="#9CB661"/>
    </linearGradient>
    <filter id="leafShadowAuth" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-color="#000" flood-opacity="0.18"/>
    </filter>
    <g id="real-leaf-auth">
      <path d="M 0,0 Q 2,10 0,20" stroke="#3E5922" stroke-width="2.2" fill="none" stroke-linecap="round"/>
      <path d="M 0,20 C -25,0 -40,40 0,70 C 40,40 25,0 0,20 Z" fill="url(#leafGradAuth)" filter="url(#leafShadowAuth)" />
      <path d="M 0,20 Q 3,45 0,65" fill="none" stroke="#253D15" stroke-width="1.4" opacity="0.6"/>
      <path d="M 0,30 Q -10,33 -15,30 M 0,40 Q -15,43 -20,37 M 0,50 Q -10,50 -15,45" fill="none" stroke="#253D15" stroke-width="1" opacity="0.4"/>
      <path d="M 0,30 Q 10,33 15,30 M 0,40 Q 15,43 20,37 M 0,50 Q 10,50 15,45" fill="none" stroke="#253D15" stroke-width="1" opacity="0.4"/>
    </g>
  </defs>
</svg>
<div class="form-vine-wrapper top-left">
  <svg width="140" height="140" viewBox="0 0 140 140" style="overflow:visible;">
    <path class="form-vine-stem" d="M 140,0 L 20,0 Q 0,0 0,20 L 0,140" filter="url(#leafShadowAuth)"/>
    <g class="form-vine-leaf leaf-delay-4" transform="translate(125, 0) rotate(-15)"><g class="sway"><g class="leaf-pop"><use href="#real-leaf-auth" transform="scale(0.38)" /></g></g></g>
    <g class="form-vine-leaf leaf-delay-2" transform="translate(90, 0) rotate(-100)"><g class="sway"><g class="leaf-pop"><use href="#real-leaf-auth" transform="scale(0.44)" /></g></g></g>
    <g class="form-vine-leaf leaf-delay-3" transform="translate(55, 0) rotate(45)"><g class="sway"><g class="leaf-pop"><use href="#real-leaf-auth" transform="scale(0.42)" /></g></g></g>
    <g class="form-vine-leaf leaf-delay-1" transform="translate(22, 0) rotate(-50)"><g class="sway"><g class="leaf-pop"><use href="#real-leaf-auth" transform="scale(0.48)" /></g></g></g>
    <g class="form-vine-leaf leaf-delay-1" transform="translate(6, 6) rotate(-135)"><g class="sway"><g class="leaf-pop"><use href="#real-leaf-auth" transform="scale(0.52)" /></g></g></g>
    <g class="form-vine-leaf leaf-delay-4" transform="translate(0, 22) rotate(120)"><g class="sway"><g class="leaf-pop"><use href="#real-leaf-auth" transform="scale(0.44)" /></g></g></g>
    <g class="form-vine-leaf leaf-delay-2" transform="translate(0, 55) rotate(165)"><g class="sway"><g class="leaf-pop"><use href="#real-leaf-auth" transform="scale(0.48)" /></g></g></g>
    <g class="form-vine-leaf leaf-delay-3" transform="translate(0, 90) rotate(-35)"><g class="sway"><g class="leaf-pop"><use href="#real-leaf-auth" transform="scale(0.44)" /></g></g></g>
    <g class="form-vine-leaf leaf-delay-5" transform="translate(0, 125) rotate(145)"><g class="sway"><g class="leaf-pop"><use href="#real-leaf-auth" transform="scale(0.38)" /></g></g></g>
  </svg>
</div>
<div class="form-vine-wrapper bottom-right">
  <svg width="140" height="140" viewBox="0 0 140 140" style="overflow:visible;">
    <path class="form-vine-stem" d="M 0,140 L 120,140 Q 140,140 140,120 L 140,0" filter="url(#leafShadowAuth)"/>
    <g class="form-vine-leaf leaf-delay-5" transform="translate(15, 140) rotate(145)"><g class="sway"><g class="leaf-pop"><use href="#real-leaf-auth" transform="scale(0.38)" /></g></g></g>
    <g class="form-vine-leaf leaf-delay-3" transform="translate(50, 140) rotate(-35)"><g class="sway"><g class="leaf-pop"><use href="#real-leaf-auth" transform="scale(0.44)" /></g></g></g>
    <g class="form-vine-leaf leaf-delay-2" transform="translate(85, 140) rotate(110)"><g class="sway"><g class="leaf-pop"><use href="#real-leaf-auth" transform="scale(0.46)" /></g></g></g>
    <g class="form-vine-leaf leaf-delay-4" transform="translate(118, 140) rotate(45)"><g class="sway"><g class="leaf-pop"><use href="#real-leaf-auth" transform="scale(0.48)" /></g></g></g>
    <g class="form-vine-leaf leaf-delay-1" transform="translate(134, 134) rotate(45)"><g class="sway"><g class="leaf-pop"><use href="#real-leaf-auth" transform="scale(0.52)" /></g></g></g>
    <g class="form-vine-leaf leaf-delay-1" transform="translate(140, 118) rotate(-45)"><g class="sway"><g class="leaf-pop"><use href="#real-leaf-auth" transform="scale(0.44)" /></g></g></g>
    <g class="form-vine-leaf leaf-delay-3" transform="translate(140, 85) rotate(155)"><g class="sway"><g class="leaf-pop"><use href="#real-leaf-auth" transform="scale(0.46)" /></g></g></g>
    <g class="form-vine-leaf leaf-delay-2" transform="translate(140, 50) rotate(-65)"><g class="sway"><g class="leaf-pop"><use href="#real-leaf-auth" transform="scale(0.44)" /></g></g></g>
    <g class="form-vine-leaf leaf-delay-4" transform="translate(140, 15) rotate(-30)"><g class="sway"><g class="leaf-pop"><use href="#real-leaf-auth" transform="scale(0.38)" /></g></g></g>
  </svg>
</div>
`;

function ensureAuthModalDOM() {
  let overlay = document.getElementById('loginOverlay');
  let modal = document.getElementById('loginModal');

  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'loginOverlay';
    overlay.className = 'login-overlay';
    document.body.appendChild(overlay);
  }

  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'loginModal';
    modal.className = 'login-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('role', 'dialog');
    document.body.appendChild(modal);
  }

  // Inject enhanced template with vines wrapped snugly inside card
  modal.innerHTML = `
    <div class="login-modal-card">
      ${AUTH_VINE_DECORATION}
      <button id="loginClose" class="login-close" aria-label="Cerrar modal">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div class="auth-modal-header">
        <img src="${logoImg}" alt="Honatu Hidroponía" class="auth-modal-logo">
        <h2 id="authModalTitle">¡Hola Cultivador!</h2>
        <p id="authModalSubtitle">Inicia sesión o regístrate para confirmar tu compra y guardar tus pedidos.</p>
      </div>

      <div class="auth-tabs" role="tablist">
        <button type="button" class="auth-tab-btn active" id="tabLoginBtn" data-target="loginPane">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
          Iniciar Sesión
        </button>
        <button type="button" class="auth-tab-btn" id="tabRegisterBtn" data-target="registerPane">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
          Registrarse
        </button>
      </div>

      <!-- PANE 1: LOGIN -->
      <div id="loginPane" class="auth-pane active">
        <form id="modalLoginForm" class="login-form">
          <div class="form-group">
            <label class="form-label" for="modalLoginEmail">Correo Electrónico</label>
            <input type="email" id="modalLoginEmail" class="form-input" placeholder="tu@correo.com" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="modalLoginPassword">Contraseña</label>
            <input type="password" id="modalLoginPassword" class="form-input" placeholder="••••••••" required>
          </div>
          <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center;">
            Ingresar y Continuar &rarr;
          </button>
          <p class="auth-switch-prompt">
            ¿Aún no tienes cuenta? <button type="button" id="switchToRegister">Crear una cuenta gratis</button>
          </p>
        </form>
      </div>

      <!-- PANE 2: REGISTER -->
      <div id="registerPane" class="auth-pane">
        <form id="modalRegisterForm" class="login-form">
          <div class="form-group">
            <label class="form-label" for="modalRegName">Nombre Completo</label>
            <input type="text" id="modalRegName" class="form-input" placeholder="Ej. Ana García" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="modalRegEmail">Correo Electrónico</label>
            <input type="email" id="modalRegEmail" class="form-input" placeholder="tu@correo.com" required>
          </div>
          <div class="form-group">
            <label class="form-label" for="modalRegPassword">Contraseña</label>
            <input type="password" id="modalRegPassword" class="form-input" placeholder="Mínimo 6 caracteres" minlength="6" required>
          </div>
          <button type="submit" class="btn btn-terracotta" style="width: 100%; justify-content: center;">
            Crear Cuenta y Continuar &rarr;
          </button>
          <p class="auth-switch-prompt">
            ¿Ya tienes una cuenta? <button type="button" id="switchToLogin">Inicia sesión aquí</button>
          </p>
        </form>
      </div>
    </div>
  `;

  bindModalEvents();
}

function switchAuthTab(targetTab) {
  const loginPane = document.getElementById('loginPane');
  const registerPane = document.getElementById('registerPane');
  const tabLoginBtn = document.getElementById('tabLoginBtn');
  const tabRegisterBtn = document.getElementById('tabRegisterBtn');
  const modalTitle = document.getElementById('authModalTitle');

  if (targetTab === 'register') {
    tabLoginBtn?.classList.remove('active');
    tabRegisterBtn?.classList.add('active');
    loginPane?.classList.remove('active');
    registerPane?.classList.add('active');
    if (modalTitle) modalTitle.textContent = '¡Únete a Honatu!';
  } else {
    tabRegisterBtn?.classList.remove('active');
    tabLoginBtn?.classList.add('active');
    registerPane?.classList.remove('active');
    loginPane?.classList.add('active');
    if (modalTitle) modalTitle.textContent = '¡Hola Cultivador!';
  }
}

function bindModalEvents() {
  const loginClose = document.getElementById('loginClose');
  const loginOverlay = document.getElementById('loginOverlay');
  const tabLoginBtn = document.getElementById('tabLoginBtn');
  const tabRegisterBtn = document.getElementById('tabRegisterBtn');
  const switchToRegister = document.getElementById('switchToRegister');
  const switchToLogin = document.getElementById('switchToLogin');
  const modalLoginForm = document.getElementById('modalLoginForm');
  const modalRegisterForm = document.getElementById('modalRegisterForm');

  loginClose?.addEventListener('click', closeLoginModal);
  loginOverlay?.addEventListener('click', closeLoginModal);

  tabLoginBtn?.addEventListener('click', () => switchAuthTab('login'));
  tabRegisterBtn?.addEventListener('click', () => switchAuthTab('register'));
  switchToRegister?.addEventListener('click', () => switchAuthTab('register'));
  switchToLogin?.addEventListener('click', () => switchAuthTab('login'));

  modalLoginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    handleAuthSuccess("¡Bienvenido(a) de nuevo! Sesión iniciada con éxito.");
  });

  modalRegisterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('modalRegName')?.value || 'Cultivador';
    handleAuthSuccess(`¡Bienvenido(a), ${name}! Tu cuenta ha sido creada.`);
  });
}

function handleAuthSuccess(successMessage) {
  isAuthenticated = true;
  setString(StorageKeys.AUTH, 'true');
  closeLoginModal();
  showToast(successMessage);

  if (typeof pendingAuthCallback === 'function') {
    const cb = pendingAuthCallback;
    pendingAuthCallback = null;
    cb();
  } else if (pendingRedirectUrl) {
    const url = pendingRedirectUrl;
    pendingRedirectUrl = null;
    setTimeout(() => {
      window.location.href = url;
    }, 600);
  }
}

export function openLoginModal(options = {}) {
  ensureAuthModalDOM();

  const modal = document.getElementById('loginModal');
  const overlay = document.getElementById('loginOverlay');
  const modalSubtitle = document.getElementById('authModalSubtitle');

  pendingAuthCallback = options.onLoginSuccess || null;
  pendingRedirectUrl = options.redirectTo || null;

  if (options.subtitle && modalSubtitle) {
    modalSubtitle.textContent = options.subtitle;
  } else if (modalSubtitle) {
    modalSubtitle.textContent = "Inicia sesión o regístrate para confirmar tu compra y guardar tus pedidos.";
  }

  if (options.defaultTab) {
    switchAuthTab(options.defaultTab);
  } else {
    switchAuthTab('login');
  }

  overlay?.classList.add('active');
  modal?.classList.remove('vines-grown');
  void modal?.offsetWidth; // Trigger reflow for vine growth animation
  modal?.classList.add('active');
  modal?.classList.add('vines-grown');
  document.body.style.overflow = 'hidden';
}

export function closeLoginModal() {
  const modal = document.getElementById('loginModal');
  const overlay = document.getElementById('loginOverlay');
  modal?.classList.remove('active');
  modal?.classList.remove('vines-grown');
  overlay?.classList.remove('active');
  document.body.style.overflow = '';
  pendingAuthCallback = null;
  pendingRedirectUrl = null;
}

export function requireAuth(onSuccess, redirectTo, subtitle) {
  if (getIsAuthenticated()) {
    if (typeof onSuccess === 'function') onSuccess();
    else if (redirectTo) window.location.href = redirectTo;
    return true;
  }
  openLoginModal({
    onLoginSuccess: onSuccess,
    redirectTo,
    subtitle: subtitle || "Inicia sesión o regístrate para confirmar tu compra."
  });
  return false;
}

export function initAuth() {
  ensureAuthModalDOM();

  // Attach to navbar account button
  document.querySelectorAll('#userLoginToggle, .nav-user-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const isSubpage = window.location.pathname.includes('/pages/');
      const targetPage = isSubpage ? 'cuenta.html' : './pages/cuenta.html';

      if (getIsAuthenticated()) {
        window.location.href = targetPage;
      } else {
        openLoginModal({
          redirectTo: targetPage,
          subtitle: "Inicia sesión para gestionar tus pedidos y perfil."
        });
      }
    });
  });

  // ESC key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLoginModal();
    }
  });
}

// Make globally accessible for all pages & inline scripts
window.openLoginModal = openLoginModal;
window.closeLoginModal = closeLoginModal;
window.requireAuth = requireAuth;
window.getIsAuthenticated = getIsAuthenticated;


