/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { useTheme } from '@emotion/react';
import { ButtonStyles } from './styles';

export interface IButtonProps {
    children?: React.ReactNode;
    className?: string;
    color?: string;
    size?: 'small' | 'default' | 'big';
    clicked: (e?: any) => void;
    title: string;
    isLoading?: boolean;
    attributes?: Record<string, unknown>;
}

export const Button: React.FC<IButtonProps> = ({
    children,
    className,
    clicked,
    title,
    isLoading = false,
    attributes,
    size = 'default',
    color = 'default',
}): JSX.Element => {
    const theme = useTheme();

    return (
        <button
            title={title}
            className={`button ${className || ''} ${
                size !== 'default' ? size : ''
            } ${color} ${isLoading ? 'loading' : ''}`}
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
