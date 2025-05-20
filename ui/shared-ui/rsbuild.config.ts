import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    path: './dist',
    cleanDistPath: true,
  },
  source: {
    alias: {
      '@shared/ui': './src',
    },
  },
  build: {
    outDir: 'dist',
    format: 'esm',
  },
});
