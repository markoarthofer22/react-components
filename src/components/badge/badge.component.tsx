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
}

const Badge: React.FC<IBadgeProps> = ({
    stylesObj = {},
    value,
}): JSX.Element => {
    const theme = useTheme();

    return (
        <div css={BadgeStyles(theme)}>
            <div className='badge--wrapper' style={stylesObj}>
                <span className='badge--wrapper--value'>{value}</span>
            </div>
        </div>
    );
};

export default Badge;
