import { css } from '@emotion/react';

export const SwitchButtonStyles = (theme: any) => {
    const breakpoints = [
        theme.breakpoints.sm,
        theme.breakpoints.md,
        theme.breakpoints.lg,
        theme.breakpoints.xlg,
    ];

    const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

    return css({
        '.toggle-switch': {
            position: 'relative',
            marginRight: 10,
            minWidth: 75,
            display: 'inline-block',
            verticalAlign: 'middle',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            textAlign: 'left',
            transform: 'scale(0.75)',

            [mq[1]]: {
                transform: 'scale(0.825)',
            },

            [mq[2]]: {
                transform: 'scale(0.9)',
            },

            '&--checkbox': {
                display: 'none',
            },

            '&--label': {
                display: 'block',
                overflow: 'hidden',
                cursor: 'pointer',
                border: `0 solid ${theme.colors.lightGrey}`,
                borderRadius: 20,
                margin: 0,

                '&:focus': {
                    outline: 'none',
                    '> span': {
                        boxShadow: `0 0 2px 5px ${theme.colors.warningRed}`,
                    },
                },
                '> span:focus': {
                    outline: 'none',
                },
            },

            '&--inner': {
                display: 'block',
                width: '200%',
                marginLeft: '-100%',
                transition: 'margin 0.3s ease-in',

                '&:before, &:after': {
                    display: 'block',
                    float: 'left',
                    width: '50%',
                    height: 34,
                    padding: 0,
                    lineHeight: '34px',
                    fontSize: 14,
                    color: theme.colors.white,
                    fontWeight: 700,
                    boxSizing: 'border-box',
                },
                '&:before': {
                    content: 'attr(data-yes)',
                    textTransform: 'uppercase',
                    paddingLeft: 10,
                    backgroundColor: theme.colors.blue,
                    color: theme.colors.white,
                },

                '&:after': {
                    content: 'attr(data-no)',
                    textTransform: 'uppercase',
                    paddingRight: 10,
                    backgroundColor: theme.colors.lightGrey,
                    color: theme.colors.white,
                    textAlign: 'right',
                },
            },
            '&--disabled': {
                backgroundColor: theme.colors.grey,
                cursor: 'not-allowed',
                '&:before': {
                    backgroundColor: theme.colors.grey,
                    cursor: 'not-allowed',
                },
            },

            '&--icon': {
                position: 'absolute',
                left: 10,
                bottom: 0,
                top: 0,
                right: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',

                '&--yes, &--no': {
                    height: 24,
                    width: 24,

                    svg: {
                        color: theme.colors.white,
                        width: '100%',
                        height: '100%',
                        transition: 'all 0.4s',
                    },
                },

                '&--yes': {
                    opacity: 0,
                    visibility: 'hidden',
                },

                '&-checked': {
                    '.toggle-switch--icon--yes': {
                        opacity: 1,
                        visibility: 'visible',
                    },

                    '.toggle-switch--icon--no': {
                        opacity: 0,
                        visibility: 'hidden',
                    },
                },
            },

            '&--switch': {
                display: 'block',
                width: 24,
                margin: '5px 0',
                background: theme.colors.white,
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 'calc(0% + 5px)',
                border: `0 solid ${theme.colors.lightGrey}`,
                borderRadius: 20,
                transition: 'all 0.3s ease-in',

                '&-checked': {
                    left: 'calc(100% - 29px)',
                },
            },

            '&--label.checked': {
                '.toggle-switch--inner': {
                    marginLeft: 0,
                },
            },

            '&--small-switch': {
                minWidth: 60,
                '.toggle-switch--inner': {
                    '&:after, &:before': {
                        content: "''",
                        height: 26,
                        lineHeight: '26px',
                    },
                },
                '.toggle-switch--switch': {
                    width: 22,
                    right: 22,
                    margin: '3px 1px',
                },
            },
        },
    });
};
