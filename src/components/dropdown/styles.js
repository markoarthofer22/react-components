import { css } from '@emotion/react';

export const DropdownStyles = (theme) =>
    css({
        '.dropdown': {
            position: ' relative',
            width: '100%',

            '&--label': {
                color: theme.colors.black,
                fontWeight: 500,
                textTransform: 'uppercase',
                marginLeft: 5,
                fontSize: 12,
            },

            '&--header': {
                cursor: 'pointer',
                border: `1px solid ${theme.colors.blue}`,
                borderRadius: 3,
                position: 'relative',
                padding: '15px 10px',
                transition: 'all 0.4s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',

                svg: {
                    width: 16,
                    height: 16,
                    transition: 'all 0.4s ease',
                },

                '&-open': {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,

                    svg: {
                        transform: 'rotateX(180deg)',
                        color: theme.colors.blue,
                    },
                },

                '&--title, &--placeholder': {
                    fontSize: 12,
                    textAlign: 'left',
                    fontWeight: 400,
                    width: '100%',
                },
            },

            '&--list': {
                position: 'absolute',
                width: '100%',
                border: `1px solid ${theme.colors.blue}`,
                backgroundColor: theme.colors.white,
                borderTop: 'none',
                borderBottomRightRadius: 3,
                borderBottomLeftRadius: 3,
                padding: 0,
                overflowY: 'scroll',
                webkitOverflowScrolling: 'touch',
                opacity: 0,
                visibility: 'hidden',
                transition: 'all 0.4s ease',

                '&-open': {
                    opacity: 1,
                    visibility: 'visible',
                },
            },

            '&--item': {
                width: '100%',
                cursor: 'pointer',
                fontSize: 12,
                padding: 10,
                fontWeight: 400,
                whiteSpace: 'nowrap',
                textAlign: 'left',
                transition: 'all 0.4s ease',
                listStyleType: 'none',

                '&.selected': {
                    color: theme.colors.white,
                    backgroundColor: theme.colors.blue,
                },

                '&:hover': {
                    color: theme.colors.white,
                    backgroundColor: theme.colors.blue,
                },
            },
        },
    });
