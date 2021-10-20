import { css, keyframes } from '@emotion/react';

export const JumpToTopStyles = (theme) =>
    css({
        '.jump-to-top': {
            position: 'fixed',
            bottom: 50,
            right: 50,
            zIndex: 100000,
            pointerEvents: 'none',
            transition: 'all 0.6s ease',

            '&--button': {
                position: 'absolute',
                bottom: 21,
                pointerEvents: 'all',
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                zIndex: 10,
                opacity: 1,
                visibility: 'visible',
                display: 'flex',
                width: 35,
                height: 35,
                borderRadius: 4,
                background: theme.colors.black,
            },

            '&-hidden': {
                bottom: -100,
                opacity: 0,
                visibility: 'hidden',
            },

            svg: {
                width: 20,
                height: 20,
                fill: theme.colors.white,
            },

            '&--title': {
                fontSize: 10,
                textTransform: 'uppercase',
                fontWeight: 700,
                zIndex: 1000,
                color: theme.colors.white,
            },
        },
    });
