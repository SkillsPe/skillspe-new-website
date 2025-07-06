import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '09b6-2401-4900-881c-3f97-e3b9-6748-ae4e-c926.ngrok-free.app'
    ]
  }
})
