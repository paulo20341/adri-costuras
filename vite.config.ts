import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 10000,
    strictPort: true,
    allowedHosts: ['https://adri-costuras-2.onrender.com'],
  },
  build: {
    outDir: 'dist', // Garante que a build vá para a pasta correta
  },
});
