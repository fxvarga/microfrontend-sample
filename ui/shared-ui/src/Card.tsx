import React from 'react';
import './Card.css';

type CardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-content">{children}</div>
    </div>
  );
};
