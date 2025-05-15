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
        remote_tax: 'http://localhost:3001/assets/remoteEntry.js',
        remote_sales: 'http://localhost:3002/assets/remoteEntry.js',
      },
      shared: {
        react: {
        singleton: true,
          requiredVersion: '^18.2.0',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18.2.0',
        }
      }
    }),
  ],
  build: {
    target: 'esnext',
  },
});
