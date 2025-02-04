import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all addresses
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,
    },
    allowedHosts: ['aeec-2001-569-be87-2900-5c95-7cb1-eb90-7790.ngrok-free.app'],
  },
  preview: {
    host: true, // Listen on all addresses
    port: 5173,
    strictPort: true,
  }
})
