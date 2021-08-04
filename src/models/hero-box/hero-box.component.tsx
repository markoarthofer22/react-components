import React from 'react';

import './styles.scss';

interface Props {
    customClass?: string;
    bgImage: string;
    title: string;
    subtitle?: string;
    hasOverlay?: boolean;
    columnSize?: string;
}

const HeroBox: React.FC<Props> = (props): JSX.Element => {
    const { customClass, bgImage, title, subtitle, hasOverlay, columnSize } =
        props;

    return (
        <section className={`hero-box ${customClass || ''}`}>
            {bgImage && (
                <div
                    className='hero-box--helper-img'
                    style={{
                        backgroundImage: `url('${bgImage}')`,
                    }}
                ></div>
            )}
            {hasOverlay && (
                <div className='hero-box--helper-img--overlay'></div>
            )}
            {(title || subtitle) && (
                <div className='container'>
                    <div className='row'>
                        <div className={`${columnSize || 'col-12 col-sm-8'}`}>
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
        </section>
    );
};

export default HeroBox;
