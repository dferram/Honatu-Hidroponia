/* ============================================
   HONATU – Main JavaScript
   Interactivity · E-Commerce · Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================
     LOADER
     ========================================== */
  const loader = document.getElementById('loader');
  if (loader) {
    const hideLoader = () => {
      loader.classList.add('loader--hide');
      loader.setAttribute('aria-hidden', 'true');
      loader.addEventListener('transitionend', () => {
        loader.remove();
      }, { once: true });
    };
    setTimeout(hideLoader, 1800);
  }

  /* ==========================================
     NAVBAR – Transparent to Solid on Scroll
     ========================================== */
  const navbar = document.getElementById('navbar');
  const heroSection = document.getElementById('hero');

  const updateNavbar = () => {
    if (!navbar || !heroSection) return;
    const scrolled = window.scrollY > heroSection.offsetHeight * 0.3;
    navbar.classList.toggle('navbar--transparent', !scrolled);
    navbar.classList.toggle('navbar--solid', scrolled);
  };

  updateNavbar();
  window.addEventListener('scroll', updateNavbar, { passive: true });

  /* ==========================================
     MOBILE MENU
     ========================================== */
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

  /* ==========================================
     SMOOTH SCROLL
     ========================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ==========================================
     ACTIVE NAV LINK ON SCROLL
     ========================================== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, {
    rootMargin: '-40% 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(section => observerNav.observe(section));

  /* ==========================================
     SCROLL-TRIGGERED ANIMATIONS
     ========================================== */
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ==========================================
     ANIMATED COUNTERS
     ========================================== */
  const counters = document.querySelectorAll('[data-count]');

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    if (target === 0) {
      el.textContent = '0';
      return;
    }
    const duration = 2000;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current.toLocaleString('es-MX');

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toLocaleString('es-MX');
        if (target >= 50) {
          el.textContent += '+';
        }
      }
    };

    requestAnimationFrame(update);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  /* ==========================================
     AUTH SYSTEM (MOCK)
     ========================================== */
  let isAuthenticated = localStorage.getItem('honatu-auth') === 'true';

  const loginModal = document.getElementById('loginModal');
  const loginOverlay = document.getElementById('loginOverlay');
  const userLoginToggle = document.getElementById('userLoginToggle');
  const loginClose = document.getElementById('loginClose');
  const loginForm = document.getElementById('loginForm');

  const openLoginModal = () => {
    if (isAuthenticated) {
      alert("Ya has iniciado sesión. (Perfil Mock)");
      return;
    }
    loginModal?.classList.add('active');
    loginOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLoginModal = () => {
    loginModal?.classList.remove('active');
    loginOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  };

  userLoginToggle?.addEventListener('click', openLoginModal);
  loginClose?.addEventListener('click', closeLoginModal);
  loginOverlay?.addEventListener('click', closeLoginModal);

  loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    isAuthenticated = true;
    localStorage.setItem('honatu-auth', 'true');
    closeLoginModal();
    alert("¡Sesión iniciada con éxito! Ya puedes agregar al carrito.");
  });

  /* ==========================================
     E-COMMERCE: Cart System
     ========================================== */
  let cart = JSON.parse(localStorage.getItem('honatu-cart') || '[]');

  const cartPanel = document.getElementById('cartPanel');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartToggle = document.getElementById('cartToggle');
  const cartClose = document.getElementById('cartClose');
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  const cartBadge = document.getElementById('cartBadge');

  const SVG_PLUS = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';
  const SVG_CHECK = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

  const openCart = () => {
    cartPanel?.classList.add('is-open');
    cartOverlay?.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const closeCartPanel = () => {
    cartPanel?.classList.remove('is-open');
    cartOverlay?.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  cartToggle?.addEventListener('click', openCart);
  cartClose?.addEventListener('click', closeCartPanel);
  cartOverlay?.addEventListener('click', closeCartPanel);

  const updateBadge = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    if (cartBadge) {
      cartBadge.textContent = totalItems;
      cartBadge.classList.toggle('has-items', totalItems > 0);
    }
  };

  const parsePrice = (priceStr) => {
    return parseInt(String(priceStr).replace(/[^0-9]/g, ''), 10) || 0;
  };

  const calcTotal = () => {
    return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  };

  const renderCart = () => {
    if (!cartItems) return;

    if (cart.length === 0) {
      cartItems.innerHTML =
        '<div class="cart-empty">' +
          '<svg class="cart-empty-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>' +
          '<p>Tu carrito esta vacio</p>' +
          '<p class="cart-empty-sub">Explora nuestros productos y empieza a cultivar</p>' +
        '</div>';
    } else {
      cartItems.innerHTML = cart.map(item =>
        '<div class="cart-item" data-cart-id="' + item.id + '">' +
          '<img src="' + item.img + '" alt="' + item.name + '" class="cart-item-img">' +
          '<div class="cart-item-info">' +
            '<div class="cart-item-name">' + item.name + '</div>' +
            '<div class="cart-item-price">$' + item.price.toLocaleString('es-MX') + ' MXN</div>' +
            '<div class="cart-item-qty">' +
              '<button class="qty-btn" data-action="decrease" data-id="' + item.id + '">&minus;</button>' +
              '<span>' + item.qty + '</span>' +
              '<button class="qty-btn" data-action="increase" data-id="' + item.id + '">+</button>' +
            '</div>' +
          '</div>' +
          '<button class="cart-item-remove" data-action="remove" data-id="' + item.id + '">' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
          '</button>' +
        '</div>'
      ).join('');
    }

    if (cartTotal) {
      cartTotal.textContent = '$' + calcTotal().toLocaleString('es-MX') + ' MXN';
    }

    updateBadge();
    localStorage.setItem('honatu-cart', JSON.stringify(cart));
  };

  const addToCart = (id, name, price, img) => {
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ id: id, name: name, price: parsePrice(price), img: img, qty: 1 });
    }
    renderCart();
  };

  cartItems?.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;

    const action = btn.dataset.action;
    const id = btn.dataset.id;

    if (action === 'increase') {
      const item = cart.find(i => i.id === id);
      if (item) item.qty += 1;
    } else if (action === 'decrease') {
      const item = cart.find(i => i.id === id);
      if (item && item.qty > 1) {
        item.qty -= 1;
      } else {
        cart = cart.filter(i => i.id !== id);
      }
    } else if (action === 'remove') {
      cart = cart.filter(i => i.id !== id);
    }

    renderCart();
  });

  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', function () {
      if (!isAuthenticated) {
        openLoginModal();
        return;
      }

      const card = this.closest('.product-card');
      if (!card) return;

      const id = card.dataset.id;
      const name = card.dataset.name;
      const price = card.dataset.price;
      const img = card.dataset.img;

      addToCart(id, name, price, img);

      this.classList.add('added');
      this.innerHTML = SVG_CHECK;
      setTimeout(() => {
        this.classList.remove('added');
        this.innerHTML = SVG_PLUS;
      }, 1200);
    });
  });

  renderCart();

  /* ==========================================
     PRODUCT FILTERING
     ========================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const filter = this.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      productCards.forEach(card => {
        const category = card.dataset.category;
        const show = filter === 'todos' || category === filter;

        if (show) {
          card.style.display = '';
          card.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* Inject filter animation keyframe */
  const style = document.createElement('style');
  style.textContent = '@keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }';
  document.head.appendChild(style);

  /* ==========================================
     CONTACT FORM
     ========================================== */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalHTML = submitBtn.innerHTML;

      submitBtn.innerHTML = 'Mensaje Enviado <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
      submitBtn.style.background = 'var(--color-sage)';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalHTML;
        submitBtn.style.background = '';
        submitBtn.disabled = false;
        contactForm.reset();
      }, 3000);
    });
  }

  /* ==========================================
     KEYBOARD SHORTCUTS
     ========================================== */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartPanel();
      if (hamburger && navMenu) {
        hamburger.classList.remove('is-active');
        navMenu.classList.remove('is-open');
      }
    }
  });

});
