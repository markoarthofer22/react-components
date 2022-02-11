/** @jsxImportSource @emotion/react */
import React from 'react';
import { useTheme } from '@emotion/react';
import { BadgeStyles } from './styles';

export type TIconType = React.ElementType | React.ComponentType;

export interface IBadgeProps {
    stylesObj?: {
        [key: string]: any;
    };
    value: string | number | TIconType | React.ReactNode;
    className?: string;
}

export const Badge: React.FC<IBadgeProps> = ({
    stylesObj = {},
    value,
    className = 'badge',
}): JSX.Element => {
    const theme = useTheme();

    return (
        <div
            className={`${className}--wrapper`}
            css={BadgeStyles(theme)}
            style={stylesObj}
        >
            <span className={`${className}--wrapper--value`}>{value}</span>
        </div>
    );
};

export default Badge;
