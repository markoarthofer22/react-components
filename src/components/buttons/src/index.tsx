/** @jsxImportSource @emotion/react */
import React from 'react';
import { useTheme } from '@emotion/react';
import { ButtonStyles } from './styles';

export interface IButtonProps {
    children?: React.ReactNode;
    className?: string;
    color?: string;
    size?: 'small' | '' | 'big';
    clicked: (e?: any) => void;
    title: string;
    isLoading?: boolean;
    attributes?: Record<string, unknown>;
}

const Button: React.FC<IButtonProps> = ({
    children,
    className,
    clicked,
    title,
    isLoading,
    attributes,
    size = '',
    color,
}): JSX.Element => {
    const theme = useTheme();

    return (
        <button
            title={title}
            className={`button ${className || ''} ${size} ${color} ${
                isLoading ? 'loading' : ''
            }`}
            type='button'
            onClick={clicked && ((e) => clicked(e))}
            disabled={isLoading}
            css={ButtonStyles(theme)}
            {...attributes}
        >
            {children || title}
        </button>
    );
};

export default Button;
