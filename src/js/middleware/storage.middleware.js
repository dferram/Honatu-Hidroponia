/* ============================================
   HONATU – Storage Middleware
   Abstraction over localStorage
   ============================================ */

export const StorageKeys = {
  CART: 'honatu-cart',
  AUTH: 'honatu-auth',
  FAVORITES: 'honatu-favs',
};

export function getItem(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getString(key) {
  return localStorage.getItem(key);
}

export function setString(key, value) {
  localStorage.setItem(key, value);
}
