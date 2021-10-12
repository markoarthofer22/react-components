import { css } from '@emotion/react';

export const QuantityInputStyles = (theme) => {
    const breakpoints = [
        theme.breakpoints.sm,
        theme.breakpoints.md,
        theme.breakpoints.lg,
        theme.breakpoints.xlg,
    ];

    const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

    return css({
        '.quantity-input': {
            display: 'flex',
            alignItems: 'center',

            '&--increment': {
                borderRadius: '0px 4px 4px 0px',
            },

            '&--decrement': {
                borderRadius: '4px 0px 0px 4px',
            },

            '&--increment, &--decrement': {
                backgroundColors: '#f1f1f1',
                borderColor: theme.colors.blue,
                color: theme.colors.blue,
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                fontWeight: 500,
                transition: 'all 0.4s ease',

                '&:hover': {
                    backgroundColor: `rgba(${theme.colors.lightBlue}, 0.3)`,
                },
            },

            '&--input': {
                borderRadius: 0,
                flex: 1,
                textAlign: 'center',
                fontWeight: 500,
                borderTop: `1px solid ${theme.colors.blue} !important`,
                borderBottom: `1px solid ${theme.colors.blue}  !important`,
                borderLeft: 'none !important',
                borderRight: 'none !important',

                '&:focus': {
                    borderTop: `1px solid ${theme.colors.blue}  !important`,
                    borderBottom: `1px solid ${theme.colors.blue}  !important`,
                    borderLeft: 'none !important',
                    borderRight: 'none !important',
                },

                [mq[0]]: {
                    height: 40,
                    maxWidth: 70,
                },
            },
        },
    });
};
