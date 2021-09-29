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
    const { colors, fonts } = theme;

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
                ,
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
