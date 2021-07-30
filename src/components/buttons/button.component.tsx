import React from 'react';

import './styles.scss';

interface ButtonProps {
    children?: React.ReactNode;
    customClass?: string;
    clicked: (e?: any) => void;
    title: string;
    isLoading?: boolean;
    attributes?: Record<string, unknown>;
}

const Button: React.FC<ButtonProps> = ({
    children,
    customClass,
    clicked,
    title,
    isLoading,
    attributes,
}): JSX.Element => (
    <button
        title={title}
        className={`button ${customClass} ${isLoading ? 'disabled' : ''}`}
        onClick={clicked && ((e) => clicked(e))}
        disabled={isLoading}
        {...attributes}
    >
        {children || title}
    </button>
);

export default Button;
