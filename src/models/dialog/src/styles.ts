import { css } from '@emotion/react';
import { rgba } from 'emotion-rgba';

export const DialogStyles = (theme: any) =>
    css({
        '.dialog': {
            '&--message': {
                fontSize: 12,
                border: '1px solid #eee',
                padding: 16,
                color: theme.colors.black,
                fontWeight: 400,
                maxHeight: 200,
                overflowY: 'scroll',
                marginBottom: 20,
            },

            '&--title': {
                marginTop: 0,
                marginBottom: 20,
                fontSize: 24,
            },

            '&--request-message': {
                border: '1px solid #eee',
                padding: 16,
                fontWeight: 300,
                minHeight: 150,
                overflowY: 'scroll',
                marginBottom: 10,
                resize: 'none',
            },

            '&--confirm, &--cancel': {
                backgroundColor: theme.colors.blue,
                fontSize: 12,
                textTransform: 'uppercase',
                border: `1px solid ${theme.colors.blue}`,
                borderRadius: 5,
                color: theme.colors.white,
                padding: '10px 36px',
                height: 'auto',

                '&:hover': {
                    backgroundColor: rgba(theme.colors.blue, 0.85),
                },
            },

            '&--confirm': {
                marginRight: 10,
            },
        },
    });
