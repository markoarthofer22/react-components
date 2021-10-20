import { css, keyframes } from '@emotion/react';
import { rgba } from 'emotion-rgba';

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

        "input[type='text'], input[type='password'], input[type='number']": {
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
                    lineHeight: '1',
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
            animation: `${errorShow} 1s`,
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
            height: 40,

            '& > span': {
                flexBasis: '40%',
            },
        },

        '.select': {
            height: 'unset !important',
            '&--countries': {
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
                height: '40px !important',
                border: 'none !important',
                borderRight: '1px solid #ccc !important',
                color: '#333',
                paddingTop: '0 !important',
                paddingBottom: '0 !important',

                svg: {
                    transition: 'all 0.4s',
                    fill: theme.colors.black,
                    stroke: theme.colors.black,
                    height: 18,
                    width: 18,
                },

                '&--placeholder': {
                    fontSize: 13,
                    position: 'relative !important',
                    transform: 'none !important',
                    top: 'unset !important',
                    left: 'unset !important',
                },
            },

            '&--list': {
                borderColor: '#ccc',
                left: -1, // for border-right on input
                width: 'calc(100% + 1px)',
                overflowX: 'hidden',

                '&--search': {
                    width: '85% !important',
                    margin: '5px auto !important',
                    borderRadius: 4,
                    padding: '0 5px !important',
                    fontSize: '10px !important',
                    height: '32px !important',
                    border: `1px solid ${theme.colors.blue} !important`,
                },
            },
        },

        '.countries-input-holder': {
            position: 'relative',

            input: {
                height: 40,
                border: 'none !important',
            },
        },
    });

export const InputRadioStyles = (theme) =>
    css({
        "input[type='radio']": {
            opacity: 0,
            position: 'absolute',
            height: '100%',
            width: '100%',
            zIndex: 10000,
            cursor: 'pointer',
        },

        "input[type='radio'] + label": {
            display: 'unset',
            position: 'relative',
            paddingLeft: 25,
            margin: '8px 0',
            lineHeight: '16px',
            cursor: 'pointer',
            transition: 'all 0.4s',
            zIndex: 1000,
            transform: 'none',
            top: 'unset',
            left: 'unset',
            pointerEvents: 'all',
            userSelect: 'all',

            '&::before': {
                content: "''",
                position: 'absolute',
                top: '50%',
                left: 0,
                transform: 'translateY(-50%)',
                height: 16,
                width: 16,
                borderRadius: '100%',
                border: `2px solid ${rgba(theme.colors.blue, 0.5)}`,
                transition: 'all 0.4s',
            },
        },

        "input[type='radio']:checked + label": {
            color: theme.colors.blue,

            '&::before': {
                border: `2px solid ${rgba(theme.colors.blue, 0.5)}`,
                backgroundColor: theme.colors.blue,
            },
        },
    });

export const InputCheckboxStyles = (theme) =>
    css({
        "input[type='checkbox']": {
            opacity: 0,
            position: 'absolute',
            height: '100%',
            width: '100%',
            zIndex: 1000,
            cursor: 'pointer',
        },

        "input[type='checkbox'] + label": {
            display: 'unset',
            position: 'relative',
            paddingLeft: 35,
            margin: '8px 0',
            lineHeight: '20px',
            transition: 'all 0.4s ease',

            '&::before': {
                content: "''",
                position: 'absolute',
                top: '50%',
                left: 0,
                transform: 'translateY(-50%)',
                height: 25,
                width: 25,
                borderRadius: 5,
                border: `1px solid ${rgba(theme.colors.blue, 0.5)}`,
                transition: 'all 0.4s ease',
            },

            '&::after': {
                content: `url('data:image/svg+xml;utf8,<svg fill="%231693c5"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512 "xml:space="preserve"><g><path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7C514.5,101.703,514.499,85.494,504.502,75.496z"/></g></svg>')`,
                display: 'block',
                width: 15,
                height: 15,
                position: 'absolute',
                left: 5,
                top: '50%',
                transform: 'translateY(-50%)',
                opacity: 0,
                visibility: 'hidden',
                transition: 'all 0.4s ease',
            },
        },

        '.checkbox-svg': {
            display: 'block',
            width: 18,
            height: 18,
            color: theme.colors.blue,
            position: 'absolute',
            left: 4,
            top: '50%',
            transform: 'translateY(-50%)',
            opacity: 0,
            visibility: 'hidden',
            transition: 'all 0.4s ease',
        },

        "input[type='checkbox'].invalid + label": {
            '&::before': {
                border: `1px solid ${rgba(theme.colors.warningRed, 1)}`,
            },

            '& > .checkbox-svg': {
                opacity: 0,
                visibility: 'hidden',
            },
        },

        "input[type='checkbox']:checked + label": {
            '&::before': {
                border: `1px solid ${rgba(theme.colors.blue, 1)}`,
            },

            '& > .checkbox-svg': {
                opacity: 1,
                visibility: 'visible',
            },
        },
    });
