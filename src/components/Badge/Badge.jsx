import React from 'react';
import './Badge.css';

export const Badge = ({
    children,
    variant = 'default',
    className = ''
}) => {
    const baseClass = 'edtech-badge';
    const classes = [
        baseClass,
        `${baseClass}--${variant}`,
        className
    ].filter(Boolean).join(' ');

    return (
        <span className={classes}>
            {children}
        </span>
    );
};
