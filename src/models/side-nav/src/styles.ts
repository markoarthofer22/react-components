/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { css } from '@emotion/react';
// import { rgba } from 'emotion-rgba';

export const SideNavStyles = (theme: any) =>
    css({
        background: '#00073d',
        color: theme.colors.white,
        height: '100vh',
        overflowY: 'auto',

        '.hide': {
            display: 'none',
        },

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
                color: theme.colors.white,
            },

            '&--menu': {
                width: 30,
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
                    background: '#eeeeee',
                    color: theme.colors.white,
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
                color: theme.colors.white,
                gap: 10,
                padding: '5px 10px',
                borderRight: '4px solid transparent',
                transition: '0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045)',
                textDecoration: 'none',

                '&-active': {
                    borderRight: `4px solid ${theme.colors.white}`,
                    background: '#2d3359',
                },

                '&:hover': {
                    borderRight: `4px solid ${theme.colors.white}`,
                    background: '#2d3359',
                    transition: '0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045)',
                },
            },

            '&--link-text': {
                whiteSpace: 'nowrap',
                fontSize: 15,
            },
        },
    });
