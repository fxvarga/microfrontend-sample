import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'mf_consumer',
  remotes: {
    'taskList': 'rslib_taskList@http://localhost:3001/mf-manifest.json',
    'workflow': 'rslib_workflow@http://localhost:3002/mf-manifest.json',
  },
  shareStrategy: 'loaded-first',
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
