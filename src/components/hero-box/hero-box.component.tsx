import React from 'react';
import PropTypes from 'prop-types';
// styles
import './styles.scss';

import clgComponentName from '../hoc/consoleComponentName';

interface iProps {
    heroClass?: string;
    bgImage: string;
    title: string;
    subtitle?: string;
    hasOverlay?: boolean;
}

const HeroBox: React.FC<iProps> = (props): JSX.Element => {
    const { heroClass, bgImage, title, subtitle, hasOverlay } = props;

    return (
        <section className={`hero-box ${heroClass ? heroClass : ''}`}>
            {bgImage && (
                <div
                    className="hero-box--helper-img"
                    style={{
                        backgroundImage: "url('" + bgImage + "')",
                    }}
                ></div>
            )}
            {hasOverlay && (
                <div className="hero-box--helper-img--overlay"></div>
            )}
            {(title || subtitle) && (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-8">
                            {title && (
                                <h1 className="hero-box--title">{title}</h1>
                            )}
                            {subtitle && (
                                <h1 className="hero-box--subtitle">
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

HeroBox.propTypes = {
    heroClass: PropTypes.string,
    bgImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    hasOverlay: PropTypes.bool,
};

export default clgComponentName(HeroBox, 'HeroBox');
