import React from 'react';

export const Card = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div style={{ border: '2px solid #555', padding: '1rem', borderRadius: '50px' }}>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};
