export function createVineDecoration() {
  const template = document.createElement('template');
  template.innerHTML = `
<svg style="width:0; height:0; position:absolute;">
  <defs>
    <linearGradient id="leafGradForm" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#4C7838"/>
      <stop offset="60%" stop-color="#6A8D45"/>
      <stop offset="100%" stop-color="#9CB661"/>
    </linearGradient>
    <filter id="leafShadowForm" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#000" flood-opacity="0.25"/>
    </filter>
    <g id="real-leaf-form">
      <path d="M 0,0 Q 2,10 0,20" stroke="#3E5922" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M 0,20 C -25,0 -40,40 0,70 C 40,40 25,0 0,20 Z" fill="url(#leafGradForm)" filter="url(#leafShadowForm)" />
      <path d="M 0,20 Q 3,45 0,65" fill="none" stroke="#253D15" stroke-width="1.5" opacity="0.6"/>
      <path d="M 0,30 Q -10,33 -15,30 M 0,40 Q -15,43 -20,37 M 0,50 Q -10,50 -15,45" fill="none" stroke="#253D15" stroke-width="1" opacity="0.4"/>
      <path d="M 0,30 Q 10,33 15,30 M 0,40 Q 15,43 20,37 M 0,50 Q 10,50 15,45" fill="none" stroke="#253D15" stroke-width="1" opacity="0.4"/>
    </g>
  </defs>
</svg>
<div class="form-vine-wrapper top-left">
  <svg width="300" height="300" viewBox="0 0 300 300" style="overflow:visible;">
    <!-- Straight stems with rounded corner so leaves align perfectly -->
    <path class="form-vine-stem" d="M 280,14 L 38,14 Q 14,14 14,38 L 14,280" filter="url(#leafShadowForm)"/>
    
    <!-- Top Border Leaves (y=14) -->
    <g class="form-vine-leaf leaf-delay-4" style="transform-origin: 240px 14px;"><g class="sway" style="transform-origin: 240px 14px;"><use href="#real-leaf-form" transform="translate(240, 14) rotate(-10) scale(0.45)" /></g></g>
    <g class="form-vine-leaf leaf-delay-2" style="transform-origin: 200px 14px;"><g class="sway" style="transform-origin: 200px 14px;"><use href="#real-leaf-form" transform="translate(200, 14) rotate(-120) scale(0.5)" /></g></g>
    <g class="form-vine-leaf leaf-delay-3" style="transform-origin: 160px 14px;"><g class="sway" style="transform-origin: 160px 14px;"><use href="#real-leaf-form" transform="translate(160, 14) rotate(60) scale(0.55)" /></g></g>
    <g class="form-vine-leaf leaf-delay-5" style="transform-origin: 120px 14px;"><g class="sway" style="transform-origin: 120px 14px;"><use href="#real-leaf-form" transform="translate(120, 14) rotate(-30) scale(0.6)" /></g></g>
    <g class="form-vine-leaf leaf-delay-2" style="transform-origin: 80px 14px;"><g class="sway" style="transform-origin: 80px 14px;"><use href="#real-leaf-form" transform="translate(80, 14) rotate(30) scale(0.5)" /></g></g>
    <g class="form-vine-leaf leaf-delay-1" style="transform-origin: 40px 14px;"><g class="sway" style="transform-origin: 40px 14px;"><use href="#real-leaf-form" transform="translate(40, 14) rotate(-45) scale(0.65)" /></g></g>
    
    <!-- Corner Leaf (Calculated exact midpoint of Q bezier) -->
    <g class="form-vine-leaf leaf-delay-1" style="transform-origin: 20px 20px;"><g class="sway" style="transform-origin: 20px 20px;"><use href="#real-leaf-form" transform="translate(20, 20) rotate(-135) scale(0.65)" /></g></g>
    
    <!-- Left Border Leaves (x=14) -->
    <g class="form-vine-leaf leaf-delay-4" style="transform-origin: 14px 40px;"><g class="sway" style="transform-origin: 14px 40px;"><use href="#real-leaf-form" transform="translate(14, 40) rotate(120) scale(0.55)" /></g></g>
    <g class="form-vine-leaf leaf-delay-2" style="transform-origin: 14px 80px;"><g class="sway" style="transform-origin: 14px 80px;"><use href="#real-leaf-form" transform="translate(14, 80) rotate(160) scale(0.6)" /></g></g>
    <g class="form-vine-leaf leaf-delay-3" style="transform-origin: 14px 120px;"><g class="sway" style="transform-origin: 14px 120px;"><use href="#real-leaf-form" transform="translate(14, 120) rotate(-20) scale(0.5)" /></g></g>
    <g class="form-vine-leaf leaf-delay-5" style="transform-origin: 14px 160px;"><g class="sway" style="transform-origin: 14px 160px;"><use href="#real-leaf-form" transform="translate(14, 160) rotate(140) scale(0.55)" /></g></g>
    <g class="form-vine-leaf leaf-delay-2" style="transform-origin: 14px 200px;"><g class="sway" style="transform-origin: 14px 200px;"><use href="#real-leaf-form" transform="translate(14, 200) rotate(-30) scale(0.45)" /></g></g>
    <g class="form-vine-leaf leaf-delay-3" style="transform-origin: 14px 240px;"><g class="sway" style="transform-origin: 14px 240px;"><use href="#real-leaf-form" transform="translate(14, 240) rotate(120) scale(0.5)" /></g></g>
  </svg>
</div>
<div class="form-vine-wrapper bottom-right">
  <svg width="250" height="250" viewBox="0 0 250 250" style="overflow:visible;">
    <!-- Straight stems with rounded corner so leaves align perfectly -->
    <path class="form-vine-stem" d="M 14,236 L 212,236 Q 236,236 236,212 L 236,14" filter="url(#leafShadowForm)"/>
    
    <!-- Bottom Border Leaves (y=236) -->
    <g class="form-vine-leaf leaf-delay-2" style="transform-origin: 40px 236px;"><g class="sway" style="transform-origin: 40px 236px;"><use href="#real-leaf-form" transform="translate(40, 236) rotate(-140) scale(0.5)" /></g></g>
    <g class="form-vine-leaf leaf-delay-4" style="transform-origin: 80px 236px;"><g class="sway" style="transform-origin: 80px 236px;"><use href="#real-leaf-form" transform="translate(80, 236) rotate(60) scale(0.55)" /></g></g>
    <g class="form-vine-leaf leaf-delay-1" style="transform-origin: 120px 236px;"><g class="sway" style="transform-origin: 120px 236px;"><use href="#real-leaf-form" transform="translate(120, 236) rotate(-110) scale(0.6)" /></g></g>
    <g class="form-vine-leaf leaf-delay-2" style="transform-origin: 160px 236px;"><g class="sway" style="transform-origin: 160px 236px;"><use href="#real-leaf-form" transform="translate(160, 236) rotate(150) scale(0.5)" /></g></g>
    <g class="form-vine-leaf leaf-delay-3" style="transform-origin: 200px 236px;"><g class="sway" style="transform-origin: 200px 236px;"><use href="#real-leaf-form" transform="translate(200, 236) rotate(30) scale(0.55)" /></g></g>
    
    <!-- Corner Leaf (Calculated exact midpoint of Q bezier) -->
    <g class="form-vine-leaf leaf-delay-1" style="transform-origin: 230px 230px;"><g class="sway" style="transform-origin: 230px 230px;"><use href="#real-leaf-form" transform="translate(230, 230) rotate(-45) scale(0.65)" /></g></g>
    
    <!-- Right Border Leaves (x=236) -->
    <g class="form-vine-leaf leaf-delay-5" style="transform-origin: 236px 200px;"><g class="sway" style="transform-origin: 236px 200px;"><use href="#real-leaf-form" transform="translate(236, 200) rotate(-120) scale(0.5)" /></g></g>
    <g class="form-vine-leaf leaf-delay-3" style="transform-origin: 236px 160px;"><g class="sway" style="transform-origin: 236px 160px;"><use href="#real-leaf-form" transform="translate(236, 160) rotate(-20) scale(0.6)" /></g></g>
    <g class="form-vine-leaf leaf-delay-2" style="transform-origin: 236px 120px;"><g class="sway" style="transform-origin: 236px 120px;"><use href="#real-leaf-form" transform="translate(236, 120) rotate(-80) scale(0.55)" /></g></g>
    <g class="form-vine-leaf leaf-delay-5" style="transform-origin: 236px 80px;"><g class="sway" style="transform-origin: 236px 80px;"><use href="#real-leaf-form" transform="translate(236, 80) rotate(-60) scale(0.5)" /></g></g>
    <g class="form-vine-leaf leaf-delay-1" style="transform-origin: 236px 40px;"><g class="sway" style="transform-origin: 236px 40px;"><use href="#real-leaf-form" transform="translate(236, 40) rotate(-140) scale(0.45)" /></g></g>
  </svg>
</div>
  `;
  return template.content.cloneNode(true);
}

export function initVineDecorations() {
  const wrappers = document.querySelectorAll('.contact-form, .servicio-form-wrapper');
  wrappers.forEach(wrapper => {
    wrapper.style.position = 'relative';
    wrapper.style.zIndex = '1';
    wrapper.appendChild(createVineDecoration());
  });
}
