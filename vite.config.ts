import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serve o projeto em /redebrnews/
  base: process.env.GITHUB_ACTIONS ? '/redebrnews/' : '/',
})
