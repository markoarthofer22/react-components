import { css } from '@emotion/react';
import { rgba } from 'emotion-rgba';

export const StyledListStyles = (theme: any) =>
    css({
        '.styled-list': {
            '&--title': {
                fontSize: 22,
                fontFamily: theme.fonts.titleFont,
                fontWeight: 400,
                color: theme.colors.black,
                padding: '10px 5px',
            },

            '&--wrapper': {
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'column',
            },

            '&--item': {
                marginBottom: 15,

                '&:last-of-type': {
                    marginBottom: 0,
                },

                '&--link': {
                    cursor: 'pointer',
                },

                '&--content': {
                    minHeight: 30,
                    padding: '10px 15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start',
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderLeft: `1px solid ${rgba(theme.colors.grey20, 0.15)}`,
                    borderRight: `1px solid ${rgba(theme.colors.grey20, 0.15)}`,
                    borderBottom: `1px solid ${rgba(
                        theme.colors.grey20,
                        0.15
                    )}`,
                    backgroundColor: rgba(theme.colors.grey20, 0.1),
                    transition: 'all .4s ease',
                    span: {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '25px',
                        height: '25px',
                        transition: 'all .4s ease',

                        cursor: 'pointer',
                        marginRight: 10,
                        svg: {
                            width: '25px',
                            height: '25px',
                            transition: 'all .4s ease',
                            color: theme.colors.black,
                        },
                    },

                    p: {
                        margin: 0,
                        color: theme.colors.black,
                        transition: 'all .4s ease',
                    },

                    '&:hover': {
                        backgroundColor: rgba(theme.colors.grey20, 0.4),

                        span: {
                            opacity: 0,
                            transform: 'scale(0)',
                        },

                        p: {
                            fontSize: 15,
                        },
                    },
                },
            },
        },
    });
