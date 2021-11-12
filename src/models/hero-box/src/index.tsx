/** @jsxImportSource @emotion/react */
import React from 'react';
import { useTheme } from '@emotion/react';

import { HeroBoxStyles } from './styles';

interface IHeroBoxProps {
    className?: string;
    bgImage: string;
    title: string;
    subtitle?: string;
    hasOverlay?: boolean;
}

const HeroBox: React.FC<IHeroBoxProps> = ({
    className = 'hero-box',
    bgImage,
    title,
    subtitle,
    hasOverlay,
}): JSX.Element => {
    const theme = useTheme();

    return (
        <div css={HeroBoxStyles(theme)} className={`${className}`}>
            {bgImage && (
                <div
                    className={`${className}--helper-img`}
                    style={{
                        backgroundImage: `url('${bgImage}')`,
                    }}
                />
            )}
            {hasOverlay && (
                <div className={`${className}--helper-img--overlay`} />
            )}
            {(title || subtitle) && (
                <div className={`${className}--container`}>
                    {title && (
                        <h1 className={`${className}--title`}>{title}</h1>
                    )}
                    {subtitle && (
                        <h1 className={`${className}--subtitle`}>{subtitle}</h1>
                    )}
                </div>
            )}
        </div>
    );
};

export default HeroBox;
