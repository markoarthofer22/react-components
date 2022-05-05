import { css } from '@emotion/react';
import { rgba } from 'emotion-rgba';

export const ModalStyles = (theme: any) =>
    css({
        '.modal': {
            '&--wrapper': {
                position: 'fixed',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                margin: '0 auto',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                overflowX: 'hidden',
                backgroundColor: rgba(theme.colors.black, 0.75),
                zIndex: 10000000,
            },

            '&--content': {
                overflowY: 'auto',
                overflowX: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                width: '60vw',
                height: '60%',
                minHeight: 400,
                minWidth: 400,
                margin: '0 auto',
                marginTop: 20,
                marginBottom: 20,
                borderRadius: 4,
                paddingBottom: 20,
                backgroundColor: theme.colors.white,
                alignSelf: 'center',
                boxShadow: `0 12px 25px 0 ${rgba(theme.colors.grey, 0.25)}`,
            },

            '&--header': {
                display: 'flex',
                padding: '10px 0',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',

                '&--title': {
                    fontSize: 30,
                    fontWeight: 500,
                    color: theme.colors.black,
                },

                svg: {
                    position: 'absolute',
                    top: 15,
                    right: 15,
                    fontSize: 24,
                    cursor: 'pointer',
                    transform: 'scale(1)',
                    transition: 'transform 300ms 250ms ease',

                    '&:hover': {
                        transform: ' scale(1.15) rotate(90deg)',
                    },
                },
            },

            '&--children': {
                padding: '0 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                alignSelf: 'stretch',

                '&--header': {
                    marginBottom: 40,
                    p: {
                        fontSize: 16,
                        marginBottom: 0,
                        textAlign: 'center',
                    },
                },
            },
        },
    });
