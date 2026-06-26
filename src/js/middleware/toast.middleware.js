/* ============================================
   HONATU – Toast Middleware
   Global toast notification system
   ============================================ */

let toastElement = null;

const TOAST_SVG = `
<svg style="width:0; height:0; position:absolute;">
  <defs>
    <linearGradient id="leafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4C7838"/>
      <stop offset="60%" stop-color="#6A8D45"/>
      <stop offset="100%" stop-color="#9CB661"/>
    </linearGradient>
    <filter id="leafShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#000" flood-opacity="0.25"/>
    </filter>
    <g id="real-leaf">
      <path d="M 0,0 Q 2,10 0,20" stroke="#3E5922" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M 0,20 C -25,0 -40,40 0,70 C 40,40 25,0 0,20 Z" fill="url(#leafGrad)" filter="url(#leafShadow)" />
      <path d="M 0,20 Q 3,45 0,65" fill="none" stroke="#253D15" stroke-width="1.5" opacity="0.6"/>
      <path d="M 0,30 Q -10,33 -15,30 M 0,40 Q -15,43 -20,37 M 0,50 Q -10,50 -15,45" fill="none" stroke="#253D15" stroke-width="1" opacity="0.4"/>
      <path d="M 0,30 Q 10,33 15,30 M 0,40 Q 15,43 20,37 M 0,50 Q 10,50 15,45" fill="none" stroke="#253D15" stroke-width="1" opacity="0.4"/>
    </g>
  </defs>
</svg>
<div class="toast-vine-container" style="position: absolute; top: -14px; left: -14px; width: 180px; height: 130px; z-index: 3; pointer-events: none;">
  <svg width="180" height="130" viewBox="0 0 180 130" style="overflow:visible;">
    <path class="vine-stem" d="M 14,14 Q 90,8 170,14" stroke="#4A5D23" stroke-width="4" fill="none" stroke-linecap="round" filter="url(#leafShadow)"/>
    <path class="vine-stem" d="M 14,14 Q 8,60 14,120" stroke="#4A5D23" stroke-width="4" fill="none" stroke-linecap="round" filter="url(#leafShadow)"/>
    <g class="vine-leaf leaf-1" style="transform-origin: 14px 14px;"><use href="#real-leaf" transform="translate(14, 14) rotate(-135) scale(0.6)" /></g>
    <g class="vine-leaf leaf-2" style="transform-origin: 60px 10px;"><use href="#real-leaf" transform="translate(60, 10) rotate(-30) scale(0.5)" /></g>
    <g class="vine-leaf leaf-3" style="transform-origin: 110px 9px;"><use href="#real-leaf" transform="translate(110, 9) rotate(60) scale(0.45)" /></g>
    <g class="vine-leaf leaf-4" style="transform-origin: 160px 13px;"><use href="#real-leaf" transform="translate(160, 13) rotate(-10) scale(0.4)" /></g>
    <g class="vine-leaf leaf-2" style="transform-origin: 11px 45px;"><use href="#real-leaf" transform="translate(11, 45) rotate(160) scale(0.5)" /></g>
    <g class="vine-leaf leaf-3" style="transform-origin: 9px 85px;"><use href="#real-leaf" transform="translate(9, 85) rotate(-20) scale(0.45)" /></g>
    <g class="vine-leaf leaf-5" style="transform-origin: 13px 120px;"><use href="#real-leaf" transform="translate(13, 120) rotate(140) scale(0.4)" /></g>
  </svg>
</div>
<div class="toast-vine-container-br" style="position: absolute; bottom: -14px; right: -14px; width: 120px; height: 90px; z-index: 3; pointer-events: none;">
  <svg width="120" height="90" viewBox="0 0 120 90" style="overflow:visible;">
    <path class="vine-stem" d="M 106,76 Q 60,82 10,76" stroke="#4A5D23" stroke-width="4" fill="none" stroke-linecap="round" filter="url(#leafShadow)"/>
    <path class="vine-stem" d="M 106,76 Q 112,40 106,10" stroke="#4A5D23" stroke-width="4" fill="none" stroke-linecap="round" filter="url(#leafShadow)"/>
    <g class="vine-leaf leaf-1" style="transform-origin: 106px 76px;"><use href="#real-leaf" transform="translate(106, 76) rotate(45) scale(0.6)" /></g>
    <g class="vine-leaf leaf-2" style="transform-origin: 65px 80px;"><use href="#real-leaf" transform="translate(65, 80) rotate(150) scale(0.5)" /></g>
    <g class="vine-leaf leaf-4" style="transform-origin: 25px 77px;"><use href="#real-leaf" transform="translate(25, 77) rotate(60) scale(0.4)" /></g>
    <g class="vine-leaf leaf-3" style="transform-origin: 110px 45px;"><use href="#real-leaf" transform="translate(110, 45) rotate(-20) scale(0.5)" /></g>
    <g class="vine-leaf leaf-5" style="transform-origin: 107px 15px;"><use href="#real-leaf" transform="translate(107, 15) rotate(-80) scale(0.4)" /></g>
  </svg>
</div>`;

export function showToast(message) {
  if (!toastElement) {
    toastElement = document.createElement('div');
    toastElement.id = 'customToast';
    toastElement.className = 'custom-toast';
    toastElement.innerHTML = `
      ${TOAST_SVG}
      <div class="toast-content" style="z-index: 10; position: relative;">
        <svg width="24" height="24" fill="none" stroke="var(--color-forest)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M9 12l2 2 4-4"/></svg>
        <span class="toast-text">${message}</span>
      </div>
    `;
    document.body.appendChild(toastElement);
  } else {
    toastElement.querySelector('.toast-text').textContent = message;
  }

  toastElement.classList.remove('show');
  void toastElement.offsetWidth;
  toastElement.classList.add('show');

  setTimeout(() => {
    toastElement.classList.remove('show');
  }, 4500);
}

// Make globally available for inline scripts
window.showToast = showToast;
