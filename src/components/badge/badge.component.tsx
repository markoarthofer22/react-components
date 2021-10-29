/** @jsxImportSource @emotion/react */
import React from 'react';
import { useTheme } from '@emotion/react';
import { BadgeStyles } from './styles';

type IconType = React.ElementType | React.ComponentType;

interface IBadgeProps {
    stylesObj?: {
        [key: string]: React.CSSProperties;
    };
    value: string | number | IconType;
    className?: string;
}

const Badge: React.FC<IBadgeProps> = ({
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
