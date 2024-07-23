import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ChainCred_landing/',
  build: {
    outDir: 'dist',
  },
});
