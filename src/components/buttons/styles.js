import { css, keyframes } from '@emotion/react';

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const ButtonStyles = (theme) =>
    css({
        position: 'relative',
        padding: '10px 25px',
        transition: 'all 0.4s',
        cursor: 'pointer',
        display: 'inline-block',
        transform: 'translateZ(0)',
        borderRadius: 2,
        textAlign: 'center',
        backgroundColor: 'transparent',
        border: ' 1px solid transparent',
        fontWeight: 600,
        height: 40,
        fontSize: 14,

        '&.disabled': {
            pointerEvents: 'none',
            opacity: 0.5,
        },

        '&.default': {
            color: theme.colors.white,
            backgroundColor: theme.colors.black,
            height: 'auto',

            '&:hover': {
                color: theme.colors.black,
                backgroundColor: theme.colors.white,
                borderColor: theme.colors.black,
                transform: 'scale(1.05)',
            },
        },

        '&.red': {
            color: theme.colors.white,
            backgroundColor: theme.colors.warningRed,
            height: 'auto',

            '&:hover': {
                color: theme.colors.warningRed,
                backgroundColor: theme.colors.white,
                borderColor: theme.colors.warningRed,
                transform: 'scale(1.05)',
            },
        },

        '&.pink': {
            color: theme.colors.white,
            backgroundColor: theme.colors.pink,
            height: 'auto',

            '&:hover': {
                color: theme.colors.pink,
                backgroundColor: 'transparent',
                borderColor: theme.colors.pink,
                transform: 'scale(1.05)',
            },
        },

        '&.green': {
            color: theme.colors.white,
            backgroundColor: theme.colors.green,
            height: 'auto',

            '&:hover': {
                color: theme.colors.green,
                backgroundColor: 'transparent',
                borderColor: theme.colors.green,
                transform: 'scale(1.05)',
            },
        },

        '&.blue': {
            color: theme.colors.white,
            backgroundColor: theme.colors.blue,
            height: 'auto',

            '&:hover': {
                color: theme.colors.blue,
                backgroundColor: theme.colors.white,
                borderColor: theme.colors.blue,
                transform: 'scale(1.05)',
            },
        },

        '&.small': {
            padding: '5px 10px',
        },

        '&.big': {
            padding: '12px 30px',
        },

        '&.loading': {
            color: 'transparent !important',
            backgroundColor: `${theme.colors.blue} !important`,
            opacity: '1 !important',

            '&.clear': {
                backgroundColor: 'transparent !important',
            },

            '&::after': {
                content: `url(
                    'data:image/svg+xml;utf8,<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 30 30" style="enable-background:new 0 0 30 30;" xml:space="preserve"><style type="text/css">.st0{fill:none;stroke:url(%23XMLID_3_);stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;}</style><linearGradient id="XMLID_3_" gradientUnits="userSpaceOnUse" x1="3.9823" y1="13.5647" x2="26.0177" y2="13.5647"><stop  offset="0" style="stop-color:%23d1af66"/><stop  offset="1" style="stop-color:%23d1af66"/></linearGradient><path id="XMLID_2_" class="st0" d="M22.5,21.7c1.6-1.8,2.5-4.1,2.5-6.7c0-5.5-4.5-10-10-10S5,9.5,5,15c0,2.8,1.1,5.3,3,7.1"/></svg>'
                )`,
                position: 'absolute',
                opacity: 1,
                left: '50%',
                top: '50%',
                marginLeft: -15,
                marginTop: -15,
                width: 30,
                height: 30,
                backgroundColor: 'transparent',
                color: theme.colors.white,
                animation: `${rotate} 2s infinite linear`,
            },
        },
    });
