import React from 'react';
import './Alert.css';
import { Info, CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react';

const icons = {
    info: Info,
    success: CheckCircle,
    warning: AlertTriangle,
    danger: AlertCircle,
};

export const Alert = ({
    title,
    children,
    variant = 'info',
    className = ''
}) => {
    const baseClass = 'edtech-alert';
    const Icon = icons[variant];

    return (
        <div className={`${baseClass} ${baseClass}--${variant} ${className}`}>
            <div className={`${baseClass}__icon-wrapper`}>
                <Icon className={`${baseClass}__icon`} size={24} />
            </div>
            <div className={`${baseClass}__content`}>
                {title && <h4 className={`${baseClass}__title`}>{title}</h4>}
                <div className={`${baseClass}__body`}>{children}</div>
            </div>
        </div>
    );
};
