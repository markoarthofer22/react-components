/** @jsxImportSource @emotion/react */
import { ThemeProvider, Global, css, useTheme } from '@emotion/react';
import React from 'react';
import emotionNormalize from 'emotion-normalize';
import { GlobalStyles } from './styles';

interface GlobalThemeProviderProps {
    children: React.ReactNode;
    theme: object;
    addNormalize?: boolean;
}

const GlobalWrapper: React.FC = (): JSX.Element => {
    const theme: any = useTheme();
    const { colors, fonts, breakpoints } = theme;

    const breakpointsArr = [
        breakpoints.sm,
        breakpoints.md,
        breakpoints.lg,
        breakpoints.xlg,
    ];

    const mq = breakpointsArr.map((bp) => `@media (min-width: ${bp}px)`);

    return (
        <Global
            styles={css`
                ${emotionNormalize}
                html {
                    font-family: ${fonts.font};
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    -ms-overflow-style: scrollbar;
                }

                body {
                    font-family: ${fonts.font};
                    line-height: 1.231;
                    height: 100%;
                    font-weight: 500;
                    color: ${colors.black};
                    background-color: ${colors.white};
                    display: flex;
                    flex-direction: column;
                    overscroll-behavior-y: none;
                    -webkit-font-smoothing: antialiased;
                    position: static;
                    overflow-y: auto;
                }

                p {
                    font-size: 1rem;
                    color: ${colors.black};
                    font-weight: 300;
                    line-height: 1.8rem;
                }

                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    // font-family: $h-font, sans-serif;
                    margin: 0.47em 0;
                    font-weight: 300;
                    color: $black;
                }

                h1 {
                    font-size: 4rem;
                }
                h2 {
                    font-size: 3.4rem;
                }
                h3 {
                    font-size: 2rem;
                }
                h4 {
                    font-size: 1.6rem;
                }
                h5 {
                    font-size: 1.2rem;
                }
                h6 {
                    font-size: 1.1rem;
                }

                b,
                strong {
                    color: $black;
                    font-weight: 700;
                }

                .popup-enter {
                    opacity: 0;
                    transform: scale(1);

                    .window {
                        animation: ScaleIn 0.4s;
                    }
                }
                .popup-enter-active {
                    opacity: 1;
                    transform: scale(1);
                    transition: opacity 0.4s, transform 0.4s;
                }

                .popup-exit {
                    opacity: 1;

                    .window {
                        animation: ScaleIn 0.4s reverse;
                    }
                }
                .popup-exit-active {
                    opacity: 0;
                    //transform: scale(0.9);
                    transition: opacity 0.4s, transform 0.4s;
                }

                @keyframes scaleIn {
                    0% {
                        transform: scale(0);
                    }
                    50% {
                        transform: scale(0.2);
                    }
                    100% {
                        transform: scale(1);
                    }
                }

                .form-item-container {
                    display: flex;
                    flex-direction: column;

                    ${[mq[0]]}: {
                        flex-direction: row;
                        align-items: center;

                        .form-item-floating {
                            width: calc(100% - 20px);

                            &:first-of-type {
                                margin-right: 20px;
                            }

                            &.phone-type {
                                width: calc(50% - 10px);
                                margin-right: 0;
                            }
                        }
                    }
                    &.single {
                        .form-item-floating {
                            width: 100%;
                            margin-right: 0;
                        }
                    }

                    &.radio-single {
                        display: flex;
                        align-items: flex-start;
                        flex-direction: column;
                        justify-content: flex-start;

                        &.inline: {
                            flex-direction: row;
                        }
                    }
                }

                .form-item-floating {
                    position: relative;
                    marginbottom: 20px;

                    &--radio {
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        height: 60px;
                    }

                    &--checkbox {
                        height: 60px;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                    }
                }

                .checkbox-single {
                    margin-bottom: 10px;
                    position: relative;

                    a {
                        transition: all 0.4s;
                        color: #333;

                        &:hover {
                            color: #333;
                        }
                    }

                    label {
                        color: #333;
                    }

                    span::before {
                        left: 35px;
                        top: calc(100% - 10px);
                    }
                }
            `}
        />
    );
};

const GlobalThemeProvider: React.FC<GlobalThemeProviderProps> = ({
    children,
    theme = GlobalStyles,
    addNormalize = true,
}): JSX.Element => (
    <ThemeProvider theme={theme}>
        {addNormalize && <GlobalWrapper />}
        {children}
    </ThemeProvider>
);

export default GlobalThemeProvider;
