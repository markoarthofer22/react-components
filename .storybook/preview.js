import { addDecorator, addParameters } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addDecorator(StoryRouter());

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});
