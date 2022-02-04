import { css } from '@emotion/react';

export const FacebookCardStyles = (theme: any) =>
    css({
        background: theme.colors.white,
        border: `1px solid ${theme.colors.lighterGrey}`,
        width: '100%',
        maxWidth: 600,
        borderRadius: 12,
        height: '100%',
        margin: '0 15px',
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',

        '.facebook-card': {
            '&--header': {
                padding: '15px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
            },

            '&--author': {
                'p, span': {
                    fontWeight: 700,
                    color: theme.colors.black,
                    marginLeft: 10,
                    marginBottom: 5,
                    fontSize: 12,
                },

                span: {
                    fontWeight: 400,
                    color: theme.colors.grey20,
                    fontSize: 10,
                },

                '&--img': {
                    borderRadius: '50%',
                    width: 40,
                    height: 40,
                    verticalAlign: 'middle',
                    position: 'relative',

                    '& > div': {
                        backgroundSize: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: '100%',
                        height: '100%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '50% 50%',
                    },
                },
            },

            '&--content': {
                padding: '0px 20px 15px',

                p: {
                    fontSize: 14,
                    color: theme.colors.black,
                    fontWeight: 400,
                    lineHeight: '16px',
                },
            },

            '&--image': {
                position: 'relative',
                width: '100%',
                height: 250,
                overflow: 'hidden',

                '& > div': {
                    backgroundSize: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '50% 50%',
                },
            },

            '&--info': {
                padding: '15px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            },

            '&--likes': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',

                '&--round-wrap': {
                    backgroundColor: theme.colors.blue,
                    padding: 5,
                    borderRadius: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                    svg: {
                        height: 12,
                        width: 12,
                        fill: theme.colors.white,
                    },
                },

                '&--count': {
                    margin: 0,
                    marginLeft: 5,
                    fontSize: 12,
                    fontWeight: 500,
                },
            },

            '&--comments': {
                p: {
                    margin: 0,
                    marginLeft: 5,
                    fontSize: 12,
                    fontWeight: 400,
                    transition: 'font-weight 0.4s ease',
                    cursor: 'pointer',
                    fontFamily: theme.fonts.font,

                    '&:hover': {
                        fontWeight: 700,
                        color: theme.colors.blue,
                    },
                },

                '&-disabled': {
                    pointerEvents: 'none',
                    cursor: 'none',
                },
            },

            '&--all-comments': {
                padding: 0,
                margin: '0 20px',
                borderTop: `1px solid ${theme.colors.grey20}`,
                opacity: 0,
                visibility: 'hidden',
                maxHeight: 0,
                transition: 'all 0.4s ease',

                '&-active': {
                    padding: '15px 0',
                    opacity: 1,
                    visibility: 'visible',
                },

                '&--item': {
                    backgroundColor: theme.colors.lighterGrey,
                    borderRadius: 20,
                    padding: 10,
                    marginBottom: 15,

                    '&:last-of-type': {
                        marginBottom: 0,
                    },

                    span: {
                        display: 'block',
                        marginBottom: 5,
                        fontSize: 14,
                        fontFamily: theme.fonts.titleFont,
                        fontWeight: 600,
                    },

                    p: {
                        fontSize: 12,
                        lineHeight: 1.4,
                        marginBottom: 0,
                        fontWeight: 400,
                    },
                },
            },
        },
    });
