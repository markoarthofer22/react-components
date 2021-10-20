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
            border: `1px solid ${theme.colors.blue}`,
            width: 'fit-content',

            '&--increment, &--decrement': {
                cursor: 'pointer',
                backgroundColor: '#f1f1f1',
                borderColor: theme.colors.blue,
                color: theme.colors.blue,
                border: 'none',
                width: 40,
                height: 42,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                fontWeight: 500,
                transition: 'all 0.4s ease',
                alignSelf: 'stretch',

                '&:hover': {
                    backgroundColor: `rgba(${theme.colors.lightBlue}, 0.3)`,
                },
            },

            '&--increment': {
                borderLeft: `1px solid ${theme.colors.blue}`,
            },

            '&--decrement': {
                borderRight: `1px solid ${theme.colors.blue}`,
            },

            '&--input': {
                borderRadius: 0,
                flex: 1,
                textAlign: 'center',
                fontWeight: 500,
                border: 'none',

                // '&:focus': {
                //     borderTop: `1px solid ${theme.colors.blue}  `,
                //     borderBottom: `1px solid ${theme.colors.blue}  `,
                //     borderLeft: 'none ',
                //     borderRight: 'none ',
                // },

                [mq[0]]: {
                    height: 40,
                    maxWidth: 70,
                },
            },
        },
    });
};
