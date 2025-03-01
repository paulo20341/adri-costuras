import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    server: {
      host: '0.0.0.0', // Permite acesso externo
      port: Number(process.env.PORT) || 3000, // Converte a porta para número
    },
  };
});
