import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: use your repo name as base, e.g. base: '/Ian-Portfolio/'
// For user site (username.github.io) use base: '/'
export default defineConfig({
  plugins: [react()],
  base: './',
})
