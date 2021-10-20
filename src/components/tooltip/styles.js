import { css, keyframes } from '@emotion/react';
import { rgba } from 'emotion-rgba';

const ShowTooltip = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-50%) translateY(-15px);
    }
    100% {
        opacity: 1;
        transform: translateX(-50%) translateY(-3px);
    }
`;

const ShowTooltipPeak = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const TooltipStyles = (theme) =>
    css({
        '.tooltip': {
            position: 'relative',
            cursor: 'pointer',
            marginLeft: 6,
            borderRadius: '100%',
            color: theme.colors.white,
            backgroundColor: theme.colors.blue,
            fontSize: 12,
            fontWeight: 700,
            width: 20,
            height: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            '&::after': {
                left: '50%',
            },

            '&::before': {
                left: '50%',
                transform: 'translateX(-50%)',
            },
        },

        '.tooltip:hover:after': {
            background: theme.colors.blue,
            borderRadius: 5,
            padding: '5px 15px',
            fontSize: 12,
            fontWeight: 500,
            color: theme.colors.white,
            content: 'attr(data-tooltipTitle)',
            position: 'absolute',
            bottom: 'calc(100% + 6px)',
            transform: 'translateX(-50%) translateY(-15px)',
            zIndex: 98,
            animation: `${ShowTooltip} 0.4s ease-out forwards`,
            minWidth: 300,
            width: '100%',
        },

        '.tooltip:hover:before': {
            border: '1px solid',
            borderColor: `${theme.colors.blue} transparent`,
            borderWidth: '6px 6px 0 6px',
            bottom: 'calc(100% + 3px)',
            content: "''",
            position: 'absolute',
            zIndex: 99,
            animation: `${ShowTooltipPeak} 0.4s ease-in-out forwards`,
        },
    });
