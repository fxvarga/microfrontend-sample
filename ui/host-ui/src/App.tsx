// src/App.tsx
import React, { Suspense } from 'react';

// Dynamically import federated components
const RemoteCard1 = React.lazy(() => import('remote_tax/Card1'));
const RemoteCard2 = React.lazy(() => import('remote_sales/Card2'));

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Host Shell App</h1>
      <Suspense fallback={<p>Loading Card 1...</p>}>
        <RemoteCard1 />
      </Suspense>
      <Suspense fallback={<p>Loading Card 2...</p>}>
        <RemoteCard2 />
      </Suspense>
    </div>
  );
};

export default App;
