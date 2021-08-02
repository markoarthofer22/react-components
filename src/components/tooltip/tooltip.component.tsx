import React from 'react';

// components
import { BsQuestion } from 'react-icons/bs';

interface TooltipProps {
    customClass?: string;
    title: string;
    icon?: React.ElementType | React.ComponentType;
}

const Tooltip: React.FC<TooltipProps> = (props): JSX.Element => {
    const { customClass, title, icon } = props;

    const C = icon || BsQuestion;

    return (
        <span
            className={`${customClass || ''} tooltip`}
            data-tooltipTitle={title || 'Not defined'}
        >
            {icon ? <C /> : '?'}
        </span>
    );
};

export default Tooltip;
