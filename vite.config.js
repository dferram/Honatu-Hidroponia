import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        tienda: resolve(__dirname, 'src/tienda.html'),
        favoritos: resolve(__dirname, 'src/favoritos.html'),
        carrito: resolve(__dirname, 'src/carrito.html'),
      },
    },
  },
});
