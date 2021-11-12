/** @jsxImportSource @emotion/react */
import React from 'react';
import { useTheme } from '@emotion/react';

import { BsQuestion } from 'react-icons/bs';
import { TooltipStyles } from './styles';

interface ITooltipProps {
    className?: string;
    title: string;
    icon?: React.ElementType | React.ComponentType;
}

const Tooltip: React.FC<ITooltipProps> = ({
    className = 'tooltip',
    title,
    icon,
}): JSX.Element => {
    const C = icon || BsQuestion;

    const theme = useTheme();

    return (
        <span
            css={TooltipStyles(theme)}
            className={`${className}`}
            data-tooltiptitle={title || 'Not defined'}
        >
            {icon ? <C /> : '?'}
        </span>
    );
};

export default Tooltip;
