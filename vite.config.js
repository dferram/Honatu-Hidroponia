import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src', // Directorio raíz de los archivos de desarrollo
  build: {
    outDir: '../dist', // Carpeta de salida en la raíz del espacio de trabajo
    emptyOutDir: true, // Limpiar el directorio dist antes de compilar
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        educacion: resolve(__dirname, 'src/educacion.html'),
        acciones: resolve(__dirname, 'src/acciones.html'),
        involucrate: resolve(__dirname, 'src/involucrate.html'),
        nosotros: resolve(__dirname, 'src/nosotros.html'),
      },
    },
  },
});
