import { css } from '@emotion/react';

export const SliderbarStyles = (theme) => {
    return css({
        maxWidth: 400,
        width: '100%',
        '.slider-bar': {
            '&--header': {
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 6,

                '& > div': {
                    color: theme.colors.blue,
                    fontWeight: 700,
                    fontFamily: theme.fonts.titleFont,
                    fontSize: 12,
                },
            },

            '&--slider': {
                position: 'relative',
                borderRadius: 3,
                background: theme.colors.lighterGrey,
                height: 15,
            },

            '&--progress': {
                borderRadius: 3,
                position: 'absolute',
                height: '100%',
                opacity: 0.5,
                background: theme.colors.blue,
            },

            '&--thumb': {
                width: 10,
                height: 25,
                borderRadius: 3,
                position: 'relative',
                top: -5,
                opacity: 0.5,
                background: theme.colors.blue,
                cursor: 'pointer',
            },

            '&--value': {
                fontFamily: theme.fonts.titleFont,
                fontWeight: 700,
                color: theme.colors.blue,
                fontSize: 12,
                width: '100%',
                textAlign: 'center',
                marginTop: 3,
            },
        },
    });
};
