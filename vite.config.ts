import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/nirvana-lab-assignment/', // Ensure base starts with a slash and ends with a slash
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': '/src', // Update alias path
    },
  },
})
