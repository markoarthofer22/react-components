/** @jsxImportSource @emotion/react */
import React from 'react';
import { ThemeProvider, Global, css, useTheme } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { GlobalStyles, ICustomTheme } from './styles';

interface GlobalThemeProviderProps {
    children: React.ReactNode;
    theme: ICustomTheme;
    addNormalize?: boolean;
    primaryColor?: string | 'transparent' | 'initial' | 'inherit';
    secondaryColor?: string | 'transparent' | 'initial' | 'inherit';
    mainFont?: string | 'initial' | 'inherit';
    titleFont?: string | 'initial' | 'inherit';
    fontSize?: number;
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

                @fontface {
                    font-family: 'Poppins', sans-serif;
                    src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap');
                }

                @fontface {
                    font-family: 'Exo 2', sans-serif;
                    src: url('https://fonts.googleapis.com/css?family=Exo+2:400,900,800,700,600,500,300,200,100');
                }

                html {
                    font-family: ${fonts.font};
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                    -ms-overflow-style: scrollbar;
                }

                body {
                    font-family: ${fonts.font};
                    font-size: ${fonts.fontSizeMain}px;
                    line-height: 1.231;
                    height: 100%;
                    font-weight: 500;
                    color: ${colors.primary || colors.black};
                    background-color: ${colors.white};
                    display: flex;
                    flex-direction: column;
                    overscroll-behavior-y: none;
                    -webkit-font-smoothing: antialiased;
                    position: static;
                    overflow-y: auto;
                }

                p {
                    font-size: ${fonts.fontSizeMain}px;
                    color: ${colors.primary || colors.black};
                    font-weight: 500;
                    line-height: ${fonts.fontSizeMain + 2}px;
                }

                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                    margin: 0.47em 0;
                    font-weight: 500;
                    color: ${colors.primary || colors.black};
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
                    color: ${colors.primary || colors.black};
                    font-weight: 700;
                }

                ,
                .mt-5 {
                    margin-top: 5px;
                }

                .mb-5 {
                    margin-bottom: 5px;
                }

                .mt-10 {
                    margin-top: 10px;
                }

                .mb-10 {
                    margin-bottom: 10px;
                }

                .mt-15 {
                    margin-top: 15px;
                }

                .mb-15 {
                    margin-bottom: 15px;
                }

                .mt-20 {
                    margin-top: 20px;
                }

                .mb-20 {
                    margin-bottom: 20px;
                }

                .mr-5 {
                    margin-right: 5px;
                }

                .ml-5 {
                    margin-left: 5px;
                }

                .mr-10 {
                    margin-right: 10px;
                }

                .ml-10 {
                    margin-left: 10px;
                }

                .mr-15 {
                    margin-right: 15px;
                }

                .ml-15 {
                    margin-left: 15px;
                }

                .mr-20 {
                    margin-right: 20px;
                }

                .ml-20 {
                    margin-left: 20px;
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
                    margin-bottom: 20px;

                    &--radio {
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        height: 40px;
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
    primaryColor,
    secondaryColor,
    mainFont,
    titleFont,
    fontSize,
}): JSX.Element => {
    const mergedTheme = {
        ...theme,
        colors: {
            ...theme?.colors,
            primary: primaryColor,
            secondary: secondaryColor,
        },
        fonts: {
            ...theme?.fonts,
            font: mainFont || theme?.fonts?.font,
            titleFont: titleFont || theme?.fonts?.titleFont,
            fontSizeMain: fontSize || theme?.fonts?.fontSizeMain,
        },
    };

    console.log('mergedTheme :>> ', mergedTheme);

    return (
        <ThemeProvider theme={mergedTheme}>
            {addNormalize && <GlobalWrapper />}
            {children}
        </ThemeProvider>
    );
};

export default GlobalThemeProvider;
