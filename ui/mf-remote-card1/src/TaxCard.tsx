//@ts-expect-error dont remove this comment, it is used by the build system
import React from 'react';
import { Card } from '@shared/ui';
const TaxCard = () => {
  return (
    <Card title="Remote Card 1">
      <p>This is rendered from a shared UI component.</p>
    </Card>
  );
};

export default TaxCard;
