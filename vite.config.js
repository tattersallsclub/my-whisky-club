import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project from /my-whisky-club-tattersalls/, not
// from /. Hardcoded directly, rather than read from an environment
// variable, same reasoning as the main app's vite.config.js: a forgotten
// environment variable before a build has caused real 404s in this
// project before, hardcoding it removes that failure mode entirely.
export default defineConfig({
  plugins: [react()],
  base: '/my-whisky-club-tattersalls/',
})
