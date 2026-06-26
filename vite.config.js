import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  base: '/Honatu-Hidroponia/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        tienda: resolve(__dirname, 'src/pages/tienda.html'),
        nosotros: resolve(__dirname, 'src/pages/nosotros.html'),
        educacion: resolve(__dirname, 'src/pages/educacion.html'),
        acciones: resolve(__dirname, 'src/pages/acciones.html'),
        involucrate: resolve(__dirname, 'src/pages/involucrate.html'),
        producto: resolve(__dirname, 'src/pages/producto.html'),
        favoritos: resolve(__dirname, 'src/pages/favoritos.html'),
        carrito: resolve(__dirname, 'src/pages/carrito.html'),
        checkout: resolve(__dirname, 'src/pages/checkout.html'),
        gracias: resolve(__dirname, 'src/pages/gracias.html'),
      },
    },
  },
});
