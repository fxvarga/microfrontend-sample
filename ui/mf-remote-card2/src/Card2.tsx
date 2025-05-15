// src/Card2.tsx
//@ts-expect-error dont remove this comment, it is used by the build system
import React from 'react';

const Card2 = () => {
  return (
    <div style={{ border: '1px solid #0066cc', padding: '1rem', borderRadius: '8px' }}>
      <h3>Remote Card 2</h3>
      <p>This card comes from another remote app.</p>
    </div>
  );
};

export default Card2;
