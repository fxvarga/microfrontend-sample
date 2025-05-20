import React from 'react';
import './Card.css';
type CardProps = {
    title?: string;
    children: React.ReactNode;
    className?: string;
};
export declare const Card: React.FC<CardProps>;
export {};
