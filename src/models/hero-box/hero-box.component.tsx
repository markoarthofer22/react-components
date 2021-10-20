/** @jsxImportSource @emotion/react */
import React from 'react';
import { useTheme } from '@emotion/react';

import { HeroBoxStyles } from './styles';

interface IHeroBoxProps {
    customClass?: string;
    bgImage: string;
    title: string;
    subtitle?: string;
    hasOverlay?: boolean;
    columnSize?: string;
}

const HeroBox: React.FC<IHeroBoxProps> = ({
    customClass,
    bgImage,
    title,
    subtitle,
    hasOverlay,
    columnSize,
}): JSX.Element => {
    const theme = useTheme();

    return (
        <span css={HeroBoxStyles(theme)}>
            <div className={`hero-box ${customClass || ''}`}>
                {bgImage && (
                    <div
                        className='hero-box--helper-img'
                        style={{
                            backgroundImage: `url('${bgImage}')`,
                        }}
                    />
                )}
                {hasOverlay && (
                    <div className='hero-box--helper-img--overlay' />
                )}
                {(title || subtitle) && (
                    <div className='container'>
                        <div className='row'>
                            <div
                                className={`${columnSize || 'col-12 col-sm-8'}`}
                            >
                                {title && (
                                    <h1 className='hero-box--title'>{title}</h1>
                                )}
                                {subtitle && (
                                    <h1 className='hero-box--subtitle'>
                                        {subtitle}
                                    </h1>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </span>
    );
};

export default HeroBox;
