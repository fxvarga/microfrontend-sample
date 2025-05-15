import React, {  useEffect, useState } from 'react';

const DagView = React.lazy(() => import('remote_tax/DagView'));

const DagWithPanel = () => {
  const [panelContent, setPanelContent] = useState<any>(null);

  useEffect(() => {
    const handle = (e: Event) => {
      const custom = e as CustomEvent;
      setPanelContent(custom.detail);
    };
    window.addEventListener('dag-node-clicked', handle);
    return () => window.removeEventListener('dag-node-clicked', handle);
  }, []);

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <div style={{ flex: 1 }}>
        <DagView />
      </div>
      {panelContent && (
        <div style={{
          width: '300px',
          borderLeft: '1px solid #ccc',
          padding: '1rem',
          background: '#fafafa',
        }}>
          <h3>Panel</h3>
          <pre>{JSON.stringify(panelContent, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DagWithPanel;