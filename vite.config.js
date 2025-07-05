import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'e885-2401-4900-881c-3f97-f916-2e00-28b2-b26d.ngrok-free.app'
    ]
  }
})
