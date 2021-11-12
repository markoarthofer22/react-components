import { css } from '@emotion/react';

export const PopupStyles = (theme) => {
    const breakpoints = [
        theme.breakpoints.sm,
        theme.breakpoints.md,
        theme.breakpoints.lg,
        theme.breakpoints.xlg,
    ];

    const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

    return css({
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        minHeight: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        overflowY: 'auto',

        [mq[0]]: {
            padding: '30px 0px',
            zIndex: 1000,
        },

        '.popup': {
            '&--window': {
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                backgroundColor: theme.colors.white,
                padding: 30,
                maxWidth: 500,
                width: '100%',
                margin: 'auto 0',
                boxShadow: '0px 13px 30px rgba(0, 0, 0, 0.2)',

                [mq[0]]: {
                    borderRadius: 8,
                },
            },

            '&--close': {
                position: 'absolute',
                padding: 0,
                right: 30,
                top: 25,
                transition: 'all 0.6s',
                border: 'none',
                zIndex: 100,
                width: 20,
                height: 20,
                backgroundColor: 'transparent',

                svg: {
                    fill: theme.colors.blue,
                    width: 20,
                    height: 20,
                    border: 'none',
                    transition: 'all 0.6s ease',
                },

                '&:hover': {
                    svg: {
                        transform: 'rotate(90deg)',
                    },
                },
            },
        },
    });
};
