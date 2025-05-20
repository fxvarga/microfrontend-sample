import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'mf_provider',
  exposes: {
    '.': './src/components/TaskList/TaskList.tsx'
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
