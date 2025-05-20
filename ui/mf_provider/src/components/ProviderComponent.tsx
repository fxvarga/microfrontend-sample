import React from 'react';
import './ProviderComponent.css';
import { Card } from '@shared/ui';

const Provider: React.FC = () => {
  return (
    <div className="container">
      <Card title='Welcome'>
        <h1> to module fed</h1>
      </Card>
    </div>
  );
};

export default Provider;
