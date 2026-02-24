import React from 'react';
import './Button.css';

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    disabled = false,
    icon: Icon,
    onClick,
    className = '',
    ...props
}) => {
    const baseClass = 'edtech-btn';
    const classes = [
        baseClass,
        `${baseClass}--${variant}`,
        `${baseClass}--${size}`,
        fullWidth ? `${baseClass}--full-width` : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <button
            className={classes}
            disabled={disabled}
            onClick={onClick}
            {...props}
        >
            {Icon && <Icon className={`${baseClass}__icon`} size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
            <span className={`${baseClass}__text`}>{children}</span>
        </button>
    );
};
