import { css } from '@emotion/react';
import { rgba } from 'emotion-rgba';

export const SideNavStyles = (theme: any) =>
    css({
        background: theme.colors.sideNavPrimary,
        color: theme.colors.sideNavSecondary,
        height: '100vh',
        overflowY: 'auto',

        '.side-nav': {
            '&--top-section': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '15px 10px',
            },

            '&--logo': {
                fontSize: 18,
                lineHeight: 0,
                color: theme.colors.sideNavSecondary,
            },

            '&--menu-button': {
                width: 30,
                cursor: 'pointer',
            },

            '&--menu': {
                display: 'flex',
                color: theme.colors.sideNavSecondary,
                padding: '5px 10px',
                borderRight: '4px solid transparent',
                transition: '0.2s ease-in all',
                justifyContent: 'space-between',
            },

            '&--menu-item': {
                display: 'flex',
                gap: 10,
            },

            '&--menu-container': {
                display: 'flex',
                flexDirection: 'column',
            },

            '&--menu-container .sublink': {
                paddingLeft: 20,
                borderBottom: `0.2px solid ${theme.colors.sideNavSecondary}`,
            },

            '&--search': {
                display: 'flex',
                alignItems: 'center',
                margin: '10px 0',
                height: 30,
                padding: 10,

                input: {
                    border: 'none',
                    marginLeft: 10,
                    borderRadius: 5,
                    background: theme.colors.grey20,
                    color: theme.colors.black,
                    WebkitAppearance: 'none',
                    transition: 'all 0.3s ease',

                    '&[disabled]': {
                        borderColor: rgba(theme.colors.grey90, 0.3),
                        color: theme.colors.grey90,
                    },

                    '&:focus': {
                        outline: 0,
                        boxShadow: 'none',
                        border: `2px solid ${theme.colors.blue}`,
                    },
                },
            },

            '&--routes': {
                marginTop: 15,
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
            },

            '&--link': {
                display: 'flex',
                color: theme.colors.sideNavSecondary,
                gap: 10,
                padding: '5px 10px',
                borderRight: '4px solid transparent',
                transition: '0.2s ease-in all',
                textDecoration: 'none',

                '&-active': {
                    borderRight: `4px solid ${theme.colors.sideNavSecondary}`,
                    background: '#2d3359',
                },

                '&:hover': {
                    borderRight: `4px solid ${theme.colors.sideNavSecondary}`,
                    background: '#2d3359',
                    transition: '0.2s ease-in all',
                },
            },

            '&--link-text': {
                whiteSpace: 'nowrap',
                fontSize: 15,
            },
        },
    });
