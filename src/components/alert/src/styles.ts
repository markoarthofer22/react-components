import { css, keyframes } from '@emotion/react';

const animation = keyframes`
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(0.2);
    }
    100% {
        transform: scale(1);
    }
`;

export const AlertStyles = (theme: any) =>
    css({
        '.alert-enter': {
            opacity: '0',
            transform: 'scale(1)',

            '.window': {
                animation: `${animation} 0.4s`,
            },
        },

        '.alert-enter-active': {
            opacity: 1,
            transform: 'scale(1)',
            transition: 'opacity 0.4s, transform 0.4s',
        },

        '.alert-exit': {
            opacity: 1,

            '.window': {
                animation: `${animation} 0.4s reverse`,
            },
        },
        '.alert-exit-active': {
            opacity: 0,
            transition: 'opacity 0.4s, transform 0.4s',
        },

        '.alert': {
            '&--wrapper': {
                position: 'absolute',
                zIndex: 100000,
                maxWidth: 350,
                width: '100%',
                right: 10,
                top: 50,
                border: '2px solid',
                borderRadius: 6,
                backgroundColor: 'transparent',
                padding: '10px 15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                '&--variant': {
                    '&-bordered': {
                        '&.type': {
                            '&-info': {
                                borderColor: theme.colors.info,

                                '.alert--main-icon svg, .alert--on-close svg': {
                                    color: theme.colors.info,
                                },
                            },
                            '&-warning': {
                                borderColor: theme.colors.warning,
                                '.alert--main-icon svg': {
                                    color: theme.colors.warning,
                                },
                            },
                            '&-success': {
                                borderColor: theme.colors.success,
                                '.alert--main-icon svg': {
                                    color: theme.colors.success,
                                },
                            },
                            '&-error': {
                                borderColor: theme.colors.error,
                                '.alert--main-icon svg': {
                                    color: theme.colors.error,
                                },
                            },
                        },
                    },

                    '&-filled': {
                        '&.type': {
                            '&-info': {
                                borderColor: theme.colors.info,
                                backgroundColor: theme.colors.info,

                                '& *': {
                                    color: theme.colors.white,
                                },
                            },
                            '&-warning': {
                                borderColor: theme.colors.warning,
                                backgroundColor: theme.colors.warning,

                                '& *': {
                                    color: theme.colors.white,
                                },
                            },
                            '&-success': {
                                borderColor: theme.colors.success,
                                backgroundColor: theme.colors.success,

                                '& *': {
                                    color: theme.colors.white,
                                },
                            },
                            '&-error': {
                                borderColor: theme.colors.error,
                                backgroundColor: theme.colors.error,

                                '& *': {
                                    color: theme.colors.white,
                                },
                            },
                        },
                    },
                },
            },

            '&--title': {
                fontSize: 18,
                fontWeight: 700,
                color: '#8a8383',
            },

            '&--main-icon': {
                flexBasis: '10%',
                marginRight: 20,
                width: 30,
                height: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                svg: {
                    width: 25,
                    height: 25,
                },
            },

            '&--content': {
                fontSize: 14,
                marginTop: 8,
                letterSpacing: 0.8,
                fontWeight: 500,
                lineHeight: '16px',
                fontFamily: theme.fonts.titleFont,

                '&--wrapper': {
                    flexBasis: '80%',
                },
            },

            '&--on-close': {
                cursor: 'pointer',
                flexBasis: '10%',
                width: 30,
                height: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                    svg: {
                        transform: 'scale(1.1)',
                    },
                },

                svg: {
                    width: 25,
                    height: 25,
                    transition: 'all .4s ease',
                },
            },
        },
    });
