import { css, keyframes } from '@emotion/react';
import { rgba } from 'emotion-rgba';

const dasharray = keyframes`
    0% {
        stroke-dasharray: 0 100;
    }

    100% {
        stroke-dasharray: 100 0;
    }
`;

const rotate = keyframes`
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(315deg);
    }
`;

export const NotificationBoxStyles = (theme) => {
    return css({
        '.notification-box': {
            position: 'absolute',
            opacity: 0,
            visibility: 'hidden',
            zIndex: 10,
            transition: 'all 0.6s ease',
            top: '50%',
            left: '50%',
            bottom: 0,
            transform: 'translate(-50%, -50%)',

            '&-open': {
                opacity: 1,
                visibility: 'visible',

                '.notification-box--body': {
                    transform: 'scale(1)',
                    opacity: 1,
                    visibility: 'visible',
                },
            },

            'button:first-of-type': {
                marginRight: 6,
            },

            '&--body': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: theme.colors.white,
                transition: 'all 0.4s ease',
                transform: 'scale(0.8)',
                boxShadow: `0px 12px 25px ${rgba(theme.colors.black, 0.1)}`,
                padding: 40,
                borderRadius: 4,
                textAlign: 'center',
            },

            '&--title': {
                marginTop: 10,
                marginBottom: 10,
                fontSize: 18,
                color: theme.colors.blue,
            },

            '&--content': {
                margin: '10px 0 20px',

                p: {
                    margin: 0,
                    fontSize: 12,
                    fontWeight: 500,
                },
            },

            '.svg-icon-success, .svg-icon-error': {
                width: 50,
                height: 50,
            },

            '.svg-icon-success': {
                '.circle': {
                    fill: theme.colors.blue,
                },

                '.circle-check': {
                    fill: 'none',
                    fillOpacity: 0,
                    strokeWidth: 4,
                    strokeDasharray: '0 100',
                    stroke: theme.colors.white,
                    strokeLinecap: 'round',
                    strokeMiterlimit: 10,
                },
            },

            '.svg-icon-success.is-animated .circle-check': {
                animationName: dasharray,
                animationDuration: '0.5s',
                animationDelay: '0.3s',
                animationTimingFunction: 'ease-in-out',
                animationFillMode: 'both',
            },

            '.svg-icon-error': {
                '.circle-2': {
                    fill: theme.colors.blue,
                },

                '.x': {
                    opacity: 1,
                },
                '.x-single': {
                    fill: theme.colors.white,
                },
            },

            '.svg-icon-error.is-animated .x-single': {
                animationName: rotate,
                animationDuration: '0.5s',
                animationDelay: '0.3s',
                animationTimingFunction: 'ease-in-out',
                animationFillMode: 'both',
                transformOrigin: '50% 50%',
            },
        },
    });
};
