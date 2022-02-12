import { css } from '@emotion/react';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const AlertStyles = (theme: any) =>
    css({
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
                            },
                            '&-warning': {
                                borderColor: theme.colors.warning,
                                backgroundColor: theme.colors.warning,
                            },
                            '&-success': {
                                borderColor: theme.colors.success,
                                backgroundColor: theme.colors.success,
                            },
                            '&-error': {
                                borderColor: theme.colors.error,
                                backgroundColor: theme.colors.error,
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
