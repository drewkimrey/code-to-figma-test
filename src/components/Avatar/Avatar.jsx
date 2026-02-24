import React from 'react';
import './Avatar.css';
import { User } from 'lucide-react';

export const Avatar = ({
    src,
    alt = "User avatar",
    size = 'md',
    initials,
    status,
    className = ''
}) => {
    const baseClass = 'edtech-avatar';
    const classes = [
        baseClass,
        `${baseClass}--${size}`,
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={classes}>
            {src ? (
                <img className={`${baseClass}__img`} src={src} alt={alt} />
            ) : initials ? (
                <div className={`${baseClass}__initials`}>{initials}</div>
            ) : (
                <div className={`${baseClass}__fallback`}>
                    <User size={size === 'sm' ? 16 : size === 'lg' ? 32 : 24} />
                </div>
            )}
            {status && (
                <span className={`${baseClass}__status ${baseClass}__status--${status}`} />
            )}
        </div>
    );
};
