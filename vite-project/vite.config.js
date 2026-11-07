import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/goit-js-hw-09/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        second: resolve(__dirname, 'src/public/01-gallery.html'),
        third: resolve(__dirname, 'src/public/02-form.html'),
      },
    },
  },
});
