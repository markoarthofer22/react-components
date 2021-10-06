import { css, keyframes } from '@emotion/react';

const errorShow = keyframes`
0% {
    opacity: 0,
    transform: translateY(-20px),
}
100% {
    opacity: 1,
    transform: translateY(0px),
}
`;

export const InputStyles = (theme) => {
    const breakpoints = [
        theme.breakpoints.sm,
        theme.breakpoints.md,
        theme.breakpoints.lg,
        theme.breakpoints.xlg,
    ];

    const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

    return css({
        position: 'relative',
        marginBottom: 20,

        "input[type='text'], textarea": {
            backgroundColor: 'transparent',

            ' & + label': {
                transition:
                    'all 0.4s ease, background-color 0.3s ease-in-out 0.2s',
                transformOrigin: '0 0',
            },

            '&:focus': {
                '& + label': {
                    top: 0,
                    transform: 'translateY(calc(-100% + 9px)) scale(0.9)',
                    padding: '0 10px',
                    backgroundColor: theme.colors.white,
                },
            },

            '&:valid': {
                '& + label': {
                    top: 0,
                    padding: '0 10px',
                    transform: 'translateY(calc(-100% + 9px)) scale(0.9)',
                    backgroundColor: theme.colors.white,
                },
            },
        },

        label: {
            display: 'inline-block',
            marginBottom: 7,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 'normal',
            color: '#999',
        },

        textarea: {
            padding: 10,
            borderRadius: 5,
            fontSize: 14,
            height: 80,
        },

        input: {
            padding: '0 10px',
            height: 60,
            borderRadius: 5,
            fontSize: 14,
            outline: 'none',

            '&[disabled]': {
                borderColor: ' hsla(0, 0%, 80%, 0.5)',
                color: '#999',
            },
        },

        "input[type='text'], input[type='password'], input[type='number'], textarea":
            {
                width: '100%',
                border: '1px solid #ccc',
                backgroundColor: theme.colors.white,
                transition: 'all 0.3s ease',
                WebkitAppearance: 'none',
                padding: '0 10px',

                '&:focus': {
                    outline: 0,
                    boxShadow: 0,
                    border: `2px solid ${theme.colors.blue}`,
                },

                '& + label': {
                    lineHeight: 1,
                    font: 'inherit',
                    fontSize: 14,
                    fontWeight: 500,
                    px: 6,
                    backgroundColor: theme.colors.white,
                },
            },

        "input[type='text'], input[type='password']": {
            '& + label': {
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                left: 10,
                userSelect: 'none',
                pointerEvents: 'none',
            },

            '.invalid': {
                border: `1px solid ${theme.colors.warningRed}`,
            },
        },

        textarea: {
            '& + label': {
                position: 'absolute',
                top: 10,
                left: 0,
                userSelect: 'none',
                pointerEvents: 'none',
            },

            '&.no-resize': {
                resize: 'none',
            },
        },

        'input.invalid ~ span:before, textarea.invalid ~ span:before': {
            position: 'absolute',
            top: 'calc(100% + 0px)',
            padding: 0,
            left: 4,
            paddingTop: 3,
            borderRadius: 4,
            content: 'attr(data-error)',
            color: theme.colors.warningRed,
            display: 'block',
            fontSize: 10,
            animationName: errorShow,
            animationDuration: '1s',
            zIndex: 1,

            [mq[1]]: {
                fontSize: 12,
            },
        },
    });
};

export const InputPhoneStyles = (theme) =>
    css({
        '.form-item-phone': {
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: 3,
        },

        '.select': {
            '&--countries': {
                position: 'relative',
                height: 40,
                flexBasis: '40%',

                '&-disabled': {
                    pointerEvents: 'none',

                    '.select--header': {
                        color: '#999',

                        svg: {
                            fill: '#999',
                            stroke: ' #999',
                        },
                    },
                },
            },

            '&--header': {
                height: 40,
                border: 'none',
                borderRight: '1px solid #ccc',
                color: '#333',

                svg: {
                    transition: 'all 0.4s',
                    fill: theme.colors.black,
                    stroke: theme.colors.black,
                    height: 18,
                    width: 18,
                },

                '&--placeholder': {
                    fontSize: 13,
                    position: 'relative',
                    transform: 'none',
                    top: 'unset',
                    left: 'unset',
                },
            },

            '&--list': {
                borderColor: '#ccc',
                left: -1, // for border-right on input
                width: 'calc(100% + 1px)',
                overflowX: 'hidden',
            },
        },

        '.countries-input-holder': {
            position: 'relative',

            input: {
                border: 'none !important',
            },
        },
    });
