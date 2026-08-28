import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages serve o projeto em /redebrnews/. Fixo (não condicionado a
  // GITHUB_ACTIONS) para que `npm run build` + `npm run preview` reproduzam
  // localmente exatamente o que vai para produção. O dev server (`vite`)
  // continua servindo em `/`.
  base: command === 'build' ? '/redebrnews/' : '/',
}))
