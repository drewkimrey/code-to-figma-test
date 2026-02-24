import React, { forwardRef } from 'react';
import './Input.css';

export const Input = forwardRef(({
    label,
    error,
    helpText,
    className = '',
    id,
    ...props
}, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const baseClass = 'edtech-input-group';

    return (
        <div className={`${baseClass} ${className}`}>
            {label && (
                <label htmlFor={inputId} className={`${baseClass}__label`}>
                    {label}
                </label>
            )}
            <input
                ref={ref}
                id={inputId}
                className={`edtech-input ${error ? 'edtech-input--error' : ''}`}
                {...props}
            />
            {error && <span className={`${baseClass}__error`}>{error}</span>}
            {helpText && !error && <span className={`${baseClass}__help`}>{helpText}</span>}
        </div>
    );
});

Input.displayName = 'Input';
