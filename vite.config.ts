import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: site lives at https://<username>.github.io/My-Portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/My-Portfolio/',
})
