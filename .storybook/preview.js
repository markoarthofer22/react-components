import { addDecorator, addParameters } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import StoryRouter from 'storybook-react-router';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(StoryRouter());

addParameters({
    a11y: {
        disable: true,
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        values: [
            {
                name: 'twitter',
                value: '#00aced',
            },
            {
                name: 'facebook',
                value: '#3b5998',
            },
            {
                name: 'white',
                value: '#ffffff',
            },
        ],
    },
});
