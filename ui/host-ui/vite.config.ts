// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        remove_tax: 'http://localhost:3001/assets/remoteEntry.js',
        remote_card2: 'http://localhost:3002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
});
