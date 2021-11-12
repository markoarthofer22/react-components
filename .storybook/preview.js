/** @jsxImportSource @emotion/react */
import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import GlobalThemeProvider from '../src/themes/global-theme-wrapper/src';

const withGlobalProvider = (story) => (
    <GlobalThemeProvider>{story()}</GlobalThemeProvider>
);

addDecorator(withGlobalProvider);

addDecorator(StoryRouter());

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});
