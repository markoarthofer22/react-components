/** @jsxImportSource @emotion/react */
import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import GlobalThemeProvider from '../src/themes/global-theme-wrapper/src';

const withGlobalProvider = (story) => (
    <GlobalThemeProvider>{story()}</GlobalThemeProvider>
);

const newViewports = {
    tamagochi: {
        name: 'tamagochi',
        styles: {
            width: '300px',
            height: '667px',
        },
    },
    iPhone5: {
        name: 'iPhone 5/se', // iPhone 6/7/8 dimensions
        styles: {
            width: '320px',
            height: '568px',
        },
    },
    iPhone6: {
        name: 'iPhone 6/7/8', // iPhone 6/7/8 dimensions
        styles: {
            width: '375px',
            height: '667px',
        },
    },
    tablet: {
        name: 'iPad', // iPad
        styles: {
            width: '768px',
            height: '1024px',
        },
    },
    desktop: {
        name: 'Desktop',
        styles: {
            width: '100%',
            height: '100%',
        },
    },
};

addDecorator(withGlobalProvider);

addDecorator(StoryRouter());

addParameters({
    viewport: {
        viewports: newViewports,
        defaultViewport: 'desktop',
    },
    options: {
        name: 'React Components Storybook',
        showStoriesPanel: true,
        showAddonPanel: true,
        showSearchBox: true,
        isToolshown: true,
        addonPanelInRight: true,
        sortStoriesByKind: true,
        hierarchyRootSeparator: '|',
        hierarchySeparator: /\/|\./,
    },
    a11y: {
        options: {
            runOnly: {
                type: 'tag',
                values: ['wcag2aa', 'wcag21a', 'wcag21aa'],
            },
            rules: {
                'color-contrast': { enabled: false },
            },
        },
    },
});
