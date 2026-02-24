import React from 'react';
import './Card.css';

export const Card = ({
    children,
    className = '',
    padding = 'normal', /* 'none' | 'normal' | 'large' */
}) => {
    const baseClass = 'edtech-card';
    return (
        <div className={`${baseClass} ${baseClass}--padding-${padding} ${className}`}>
            {children}
        </div>
    );
};

export const CardHeader = ({ children, className = '' }) => (
    <div className={`edtech-card__header ${className}`}>{children}</div>
);

export const CardBody = ({ children, className = '' }) => (
    <div className={`edtech-card__body ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = '' }) => (
    <div className={`edtech-card__footer ${className}`}>{children}</div>
);
