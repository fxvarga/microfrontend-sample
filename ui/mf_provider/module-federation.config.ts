import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'mf_provider',
  exposes: {
    '.': './src/components/TaskComponent.tsx'
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
