/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { useTheme } from '@emotion/react';

import { BsQuestion } from 'react-icons/bs';
import { TooltipStyles } from './styles';

export interface ITooltipProps {
    title: string;
    className?: string;
    icon?: React.ElementType | React.ComponentType;
}

export const Tooltip: React.FC<ITooltipProps> = ({
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
