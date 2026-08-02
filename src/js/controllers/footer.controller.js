/* ============================================
   HONATU – Shared Footer Component Controller
   Injects unified footer markup across all pages
   ============================================ */

export function initFooter() {
  const footerElement = document.querySelector('footer.footer');
  if (!footerElement) return;

  // Determine relative paths for root vs subpages
  const isSubpage = window.location.pathname.includes('/pages/');
  const basePath = isSubpage ? '../' : './';
  const pagesPath = isSubpage ? '' : './pages/';
  const indexPath = isSubpage ? '../index.html' : './index.html';

  footerElement.innerHTML = `
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <img src="${basePath}assets/logo/Logo.png" alt="Honatu" class="footer-logo-img" style="height: 84px; width: auto; max-width: 250px; object-fit: contain;">
          <p>Insumos hidropónicos premium para cultivadores que buscan calidad, conocimiento y comunidad.</p>
          <div class="footer-social">
            <a href="#" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.4 31.4 0 000 12a31.4 31.4 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.4 31.4 0 0024 12a31.4 31.4 0 00-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>
            </a>
            <a href="#" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4l-2-1c-.3-.1-.5-.1-.7.2l-.9 1.1c-.2.2-.3.2-.6.1a7.6 7.6 0 01-3.8-3.3c-.2-.3 0-.5.2-.6l.5-.6c.1-.2.2-.3.1-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3zM12 21.8a9.9 9.9 0 01-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 01-1.5-5.2c0-5.5 4.5-10 10-10a9.9 9.9 0 017 2.9 9.8 9.8 0 012.9 7c0 5.5-4.5 10-10 10zm8.5-18.3A11.8 11.8 0 0012 0C5.4 0 .1 5.3.1 11.9a11.8 11.8 0 001.6 5.9L0 24l6.3-1.7a11.9 11.9 0 005.7 1.5c6.6 0 11.9-5.3 11.9-11.9a11.8 11.8 0 00-3.5-8.4z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Navegación</h4>
          <a href="${indexPath}#nosotros">Nosotros</a>
          <a href="${pagesPath}tienda.html">Tienda</a>
          <a href="${pagesPath}educacion.html">Educación</a>
          <a href="${pagesPath}talleres.html">Talleres</a>
          <a href="${indexPath}#impacto">Impacto</a>
        </div>

        <div class="footer-col">
          <h4>Contacto</h4>
          <p>+52 (442) 123-4567</p>
          <p>info@honatu.com</p>
          <p>Querétaro, Qro. México</p>
        </div>

        <div class="footer-col">
          <h4>Horarios</h4>
          <p>Lunes – Viernes: 9:00 – 18:00</p>
          <p>Sábado: 10:00 – 14:00</p>
          <p>Domingo: Cerrado</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2024 Honatu. Todos los derechos reservados.</p>
        <a href="#">Política de Privacidad</a>
      </div>
    </div>
  `;
}
