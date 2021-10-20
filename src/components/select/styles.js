import { css } from '@emotion/react';

export const SelectStyles = (theme) => {
    const breakpoints = [
        theme.breakpoints.sm,
        theme.breakpoints.md,
        theme.breakpoints.lg,
        theme.breakpoints.xlg,
    ];

    const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

    return css({
        '.select': {
            position: 'relative',
            width: '100%',

            '&--header': {
                position: 'relative',
                cursor: 'pointer',
                border: `1px solid ${theme.colors.blue}`,
                padding: '15px 0 15px 10px',
                transition: 'all 0.4s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',

                svg: {
                    fill: theme.colors.blue,
                    stroke: theme.colors.blue,
                    marginRight: 5,
                    height: 16,
                    width: 16,
                    transform: 'rotateX(0deg)',
                    transition: 'all 0.4s ease',
                },

                '&-open': {
                    svg: {
                        transform: 'rotateX(180deg)',
                        fill: theme.colors.blue,
                    },
                },

                '&--title': {
                    textAlign: 'left',
                    fontWeight: 400,
                    width: '100%',
                    fontSize: 12,
                    marginLeft: 5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',

                    [mq[0]]: {
                        fontSize: 14,
                        marginLeft: 0,
                    },
                },

                '&--placeholder': {
                    textAlign: 'left',
                    fontWeight: 400,
                    width: '100%',
                    fontSize: 10,
                    marginLeft: 5,

                    [mq[0]]: {
                        fontSize: 14,
                        marginLeft: 0,
                        position: 'absolute',
                        top: '50%',
                        left: 10,
                        transform: 'translateY(-50%)',
                    },
                },
            },

            '&--list': {
                zIndex: 10,
                position: 'absolute',
                visibility: 'hidden',
                opacity: 0,
                width: '100%',
                border: `1px solid ${theme.colors.blue}`,
                backgroundColor: theme.colors.white,
                borderBottomRightRadius: 4,
                borderBottomLeftRadius: 4,
                padding: 0,
                overflowY: 'auto',
                WebkitOverflowScrolling: 'touch',
                maxHeight: 0,
                transition: 'all 0.4s ease',

                '&-open': {
                    opacity: 1,
                    visibility: 'visible',
                    maxHeight: 250,
                },

                '&--search': {
                    display: 'block',
                    width: '95%',
                    margin: '5px auto',
                    borderRadius: 4,
                    padding: '0 5px',
                    fontSize: '10px',
                    height: '32px',
                    border: `1px solid ${theme.colors.blue} !important`,
                },
            },

            '&--item': {
                width: '100%',
                cursor: 'pointer',
                fontSize: 12,
                padding: 12,
                display: 'inline-block',
                textAlign: 'left',
                transition: 'all 0.4s ease',
                borderBottom: '1px solid #ccc',

                '&:hover': {
                    backgroundColor: theme.colors.blue,
                    color: theme.colors.white,
                },
            },
        },
    });
};
