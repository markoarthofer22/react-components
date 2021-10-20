import { css } from '@emotion/react';
import { rgba } from 'emotion-rgba';

export const HeroBoxStyles = (theme) => {
    const breakpoints = [
        theme.breakpoints.sm,
        theme.breakpoints.md,
        theme.breakpoints.lg,
        theme.breakpoints.xlg,
    ];

    const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

    return css({
        '.hero-box': {
            width: '100%',
            height: 650,
            position: 'relative',
            zIndex: 1000,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            ' &--helper-img': {
                position: 'absolute',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100%',
                width: '100%',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,

                '&--overlay': {
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: rgba(theme.colors.black, 0.3),
                    zIndex: 100,
                },
            },

            '&--title': {
                position: 'relative',
                fontSize: 35,
                color: theme.colors.white,
                fontWeight: 700,
                fontFamily: theme.fonts.titleFont,
                zIndex: 1000,

                [mq[0]]: {
                    fontSize: 45,
                },

                [mq[2]]: {
                    fontSize: 62,
                },
            },

            '&--subtitle': {
                fontSize: 22,
                lineHeight: '26px',
                color: theme.colors.white,
                fontFamily: theme.fonts.font,

                [mq[1]]: {
                    fontSize: 22,
                },

                [mq[2]]: {
                    fontSize: 26,
                },
            },
        },
    });
};
