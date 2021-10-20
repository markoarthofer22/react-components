import { css } from '@emotion/react';

export const HamburgerStyles = (theme) => {
    const breakpoints = [
        theme.breakpoints.sm,
        theme.breakpoints.md,
        theme.breakpoints.lg,
        theme.breakpoints.xlg,
    ];

    const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

    return css({
        '.hamburger': {
            position: 'absolute',
            width: 50,
            height: 50,
            transition: 'all 0.6s ease',
            top: '50%',
            right: '5px',
            transform: 'translateY(-50%)',
            cursor: 'pointer',

            '&--hide-desktop': {
                [mq[1]]: {
                    display: 'none',
                },
            },

            '&--item': {
                height: 2,
                backgroundColor: theme.colors.blue,
                position: 'absolute',
                left: 13,
                right: 13,
                transition: 'all 0.6s ease',

                '&:nth-child(1)': {
                    top: 'calc(34% - 2px)',
                },

                '&:nth-child(2)': {
                    top: 'calc(50% - 2px)',
                },

                '&:nth-child(3)': {
                    top: 'calc(66% - 2px)',
                },
            },

            '&--open': {
                '& > div': {
                    backgroundColor: theme.colors.blue,
                },

                '& > div:nth-child(1)': {
                    top: 'calc(50% - 2px)',
                    transform: 'rotateZ(45deg)',
                },

                '& > div:nth-child(2)': {
                    opacity: 0,
                },

                '& > div:nth-child(3)': {
                    top: 'calc(50% - 2px)',
                    transform: 'rotateZ(-45deg)',
                },
            },
        },
    });
};
