import { css } from '@emotion/react';

export const BreadcrumbsStyles = (theme) => {
    const breakpoints = [
        theme.breakpoints.sm,
        theme.breakpoints.md,
        theme.breakpoints.lg,
        theme.breakpoints.xlg,
    ];

    const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

    return css({
        '.breadcrumbs': {
            margin: 0,
            padding: 0,

            [mq[0]]: {
                flexDirection: 'row',
                display: 'flex',
                alignItems: 'center',
            },

            '&--item': {
                listStyleType: 'none',

                '&:first-of-type a': {
                    fontWeight: 500,
                    color: theme.colors.black,

                    svg: {
                        width: 20,
                        height: 20,
                        fill: theme.colors.black,
                        transition: 'all 0.4s',
                    },

                    '&:hover': {
                        color: theme.colors.blue,

                        svg: {
                            fill: theme.colors.blue,
                        },
                    },
                },

                '&:not(:last-child)': {
                    display: 'block',

                    [mq[0]]: {
                        display: 'inline',
                    },
                },

                '&:not(:last-child) a:after': {
                    content: '""',
                    position: 'absolute',
                    width: 10,
                    height: 10,
                    backgroundColor: theme.colors.blue,
                    right: 0,
                    top: '50%',
                    transform: 'translate(50%, -50%)',
                    borderRadius: 12,
                },
            },

            '&--link': {
                position: 'relative',
                marginRight: 10,
                paddingRight: 10,
                fontWeight: 400,
                fontSize: 12,
                color: theme.colors.grey,
                transition: 'all 0.4s',

                [mq[0]]: {
                    fontSize: 16,
                    paddingRight: 15,
                    marginRight: 15,
                },

                '&:hover': {
                    color: theme.colors.black,
                },
            },
        },
    });
};
