import React from 'react';
import PropTypes from 'prop-types';

// hoc
import clgComponentName from '../hoc/consoleComponentName';

interface iProps {
    icon: string;
    iconclass?: string;
    pureSvg?: string;
}

const SvgIcon: React.FC<iProps> = ({
    icon,
    iconclass,
    pureSvg,
}): JSX.Element => {
    if (pureSvg) {
        return (
            <svg
                className={`icon ${iconclass ? iconclass : ''}`}
                dangerouslySetInnerHTML={{ __html: pureSvg }}
            />
        );
    } else {
        return (
            <svg className={`icon ${iconclass ? iconclass : icon}`}>
                <use
                    xlinkHref={`${process.env.PUBLIC_URL}/icons.svg#${icon}`}
                />
            </svg>
        );
    }
};

SvgIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    iconclass: PropTypes.string,
    pureSvg: PropTypes.string,
};

export default clgComponentName(SvgIcon, 'SvgIcon');
