import { Theme } from '@emotion/react';

export interface ICustomTheme extends Theme {
    [key: string]: any;
}

export const GlobalStyles: ICustomTheme = {
    colors: {
        warningRed: '#d71920',
        white: '#ffffff',
        background: '#f9fbfe',
        black: '#000000',
        lightGrey: '#a7b0b4',
        grey20: '#cccccc',
        grey70: '#333',
        grey90: '#999999',
        lighterGrey: '#e7eaed',
        grey: '#6d6e70',
        blue: '#1693c5',
        darkBlue: '#334a9c',
        yellow: '#f5ef42',
        orange: '#f79520',
        darkOrange: '#cd7d1d',
        darkerBlue: '#1693c5',
        lightBlue: '#29a9e1',
        green: '#2e8b57',
        pink: '#c71585',
        swiperPaginationFirst: '#1693c5',
        swiperPaginationSecond: '#334a9c',
        info: '#03a9f4',
        warning: '#ff9800',
        success: '#4caf50',
        error: '#ef5350',
    },
    fonts: {
        titleFont: "'Exo 2', sans-serif",
        font: "'Poppins', sans-serif",
        fontSizeMain: 14,
        mainColor: '#000',
    },
    breakpoints: {
        sm: 576,
        md: 768,
        lg: 992,
        xlg: 1200,
    },
};
