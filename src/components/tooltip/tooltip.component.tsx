/** @jsxImportSource @emotion/react */
import React from 'react';
import { useTheme } from '@emotion/react';

import { BsQuestion } from 'react-icons/bs';
import { TooltipStyles } from './styles';

interface ITooltipProps {
    customClass?: string;
    title: string;
    icon?: React.ElementType | React.ComponentType;
}

const Tooltip: React.FC<ITooltipProps> = ({
    customClass,
    title,
    icon,
}): JSX.Element => {
    const C = icon || BsQuestion;

    const theme = useTheme();

    return (
        <span css={TooltipStyles(theme)}>
            <span
                className={`${customClass || ''} tooltip`}
                data-tooltiptitle={title || 'Not defined'}
            >
                {icon ? <C /> : '?'}
            </span>
        </span>
    );
};

export default Tooltip;
