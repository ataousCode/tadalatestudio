import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/tawk-to': {
        target: 'https://embed.tawk.to',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/tawk-to/, ''),
      },
    },
  },
})
