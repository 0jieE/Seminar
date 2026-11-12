import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' lets the built site run from any folder or static host (even a USB stick).
export default defineConfig({
  plugins: [react()],
  base: './',
})
