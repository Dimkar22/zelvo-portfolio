import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Если запускаем сборку для продакшена — используем путь, иначе — корень
  base: process.env.NODE_ENV === 'production' ? '/zelvo-portfolio/' : '/',
})