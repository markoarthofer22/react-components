import { css } from '@emotion/react';

export const BadgeStyles = (theme) =>
    css({
        '.badge': {
            '&--wrapper': {
                position: 'absolute',
                top: -22,
                right: -22,
                padding: 8,
                borderRadius: '100%',
                backgroundColor: theme.colors.blue,
                color: theme.colors.white,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

                '&--value': {
                    fontSize: 14,
                    fontFamily: theme.fonts.titleFont,
                    lineHeight: 1,
                },
            },
        },
    });
