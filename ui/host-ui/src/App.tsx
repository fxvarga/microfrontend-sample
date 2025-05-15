// src/App.tsx
import React, { Suspense } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import DagWithPanel from './pages/DagPanel';

// Dynamically import federated components
const TaxList = React.lazy(() => import('remote_tax/List'));

const App = () => {
  return (
    <Router>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>🏠 Home</Link>
        <Link to="/tax" style={{ marginRight: '1rem' }}>💼 Tax</Link>
      </nav>

      <Suspense fallback={<div>Loading remote module...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tax" element={<TaxList />} />
          <Route path="/dag" element={<DagWithPanel />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
