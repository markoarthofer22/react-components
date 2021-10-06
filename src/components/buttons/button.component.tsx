/** @jsxImportSource @emotion/react */
import React from 'react';
import { useTheme } from '@emotion/react';
import { ButtonStyles } from './styles';

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
}): JSX.Element => {
    const theme = useTheme();

    return (
        <button
            title={title}
            className={`button ${customClass || ''} ${
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
