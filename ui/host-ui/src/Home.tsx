import React, { Suspense } from "react";
const RemoteCard1 = React.lazy(() => import('remote_tax/TaxCard'));
const RemoteCard2 = React.lazy(() => import('remote_sales/Card2'));

const Home = () => (
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

export default Home;