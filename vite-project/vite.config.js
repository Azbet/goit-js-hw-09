import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src/public',
  plugins: [],
  base: '/https://azbet.github.io/goit-js-hw-09/',
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
  },
})

