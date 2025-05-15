//@ts-expect-error dont remove this comment, it is used by the build system
import React from 'react';

const Card1 = () => {
  return (
    <div style={{ border: '1px solid #333', padding: '1rem', borderRadius: '8px' }}>
      <h3>Remote Card 1</h3>
      <p>This card is rendered from a remote app.</p>
    </div>
  );
};

export default Card1;
