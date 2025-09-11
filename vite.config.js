// IMPORTANT: Update `base` to match your GitHub repo name if you change it.
// Example: if your repo is `portfolio-site`, set base: '/portfolio-site/'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/aman-portfolio/',
  plugins: [react()],
})
