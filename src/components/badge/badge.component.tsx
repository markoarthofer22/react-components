import React from 'react';

// components

type IconType = React.ElementType | React.ComponentType;

interface BadgeProps {
    stylesObj?: {
        [key: string]: React.CSSProperties;
    };
    value: string | number | IconType;
}

const Badge: React.FC<BadgeProps> = ({
    stylesObj = {},
    value,
}): JSX.Element => (
    <div className='badge--wrapper' style={stylesObj}>
        <span className='badge--wrapper--value'>{value}</span>
    </div>
);

export default Badge;
