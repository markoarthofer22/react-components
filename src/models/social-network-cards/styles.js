import { css } from '@emotion/react';

export const CustomCardStyles = (theme) =>
    css({
        display: 'block',
        alignSelf: 'stretch',
        margin: '0 10px',

        '.custom-card-wrapper': {
            background: theme.colors.white,
            border: `1px solid ${theme.colors.lighterGrey}`,
            borderRadius: 3,
            width: '100%',
            maxWidth: 600,
            margin: '0 10px',
            borderRadius: 12,
            height: '100%',

            '&--header': {
                padding: '15px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
            },
        },
    });
