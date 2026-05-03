/**
 * Obtiene la ruta base para assets en producción (GitHub Pages)
 */
export function getBasePath() {
  return process.env.NODE_ENV === 'production' ? '/Honatu-Hidroponia' : '';
}

/**
 * Construye la ruta completa para un asset (imagen, etc.)
 * @param path - Ruta relativa del asset (ej: '/logo.png')
 */
export function assetPath(path: string): string {
  const base = getBasePath();
  // Asegurarse de que la ruta comience con /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}
