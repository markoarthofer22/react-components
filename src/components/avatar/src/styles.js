import { css } from '@emotion/react';

export const AvatarStyles = (theme) =>
    css({
        '.avatar': {
            '&--wrapper': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',

                '&--grouped': {
                    '.avatar--item': {
                        margin: 0,

                        '&:not(:first-of-type)': {
                            marginLeft: -20,
                        },
                    },
                },
            },

            '&--item': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 15,
                fontSize: 22,
                fontFamily: theme.fonts.titleFont,
                fontWeight: 700,
                padding: 4,
                overflow: 'hidden',

                '&:last-of-type': {
                    marginRight: 0,
                },

                '& *': {
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: '100%',
                    height: '100%',
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                },

                '&-small': {
                    width: 32,
                    height: 32,
                    fontSize: 12,
                },

                '&-normal': {
                    width: 52,
                    height: 52,
                },

                '&-big': {
                    width: 76,
                    height: 76,
                    fontSize: 26,
                },

                '&-circled': {
                    borderRadius: '50%',
                },

                '&-squared': {
                    borderRadius: 0,
                },

                '&-rounded': {
                    borderRadius: 8,
                },

                '&--counter': {
                    backgroundColor: theme.colors.lightGrey,
                    p: {
                        fontSize: 22,
                        fontFamily: theme.fonts.titleFont,
                        fontWeight: 700,
                    },
                },
            },
        },
    });
