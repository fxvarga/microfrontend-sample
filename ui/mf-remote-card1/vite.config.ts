// mf-remote-card1/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import {dependencies} from './package.json'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'tax_program',
      filename: 'remoteEntry.js',
      exposes: {
        './TaxCard': './src/TaxCard.tsx',
        './List': './src/List.tsx',
        './DagView': './src/DagView.tsx',
      },
      shared: {
        react: {
          import: 'react',
          external: true,
          requiredVersion: dependencies['react']
        },
        'react-dom': {
          import: 'react-dom',
          external: true,
          requiredVersion: dependencies['react-dom']
        }
      }
    }),
  ],
  optimizeDeps: {
    exclude: ['react', 'react-dom'],
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5001,
  },
});
