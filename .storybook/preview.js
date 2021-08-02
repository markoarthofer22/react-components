import { addDecorator, addParameters } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import '../src/scss/Defaults.scss';
import '../src/scss/App.scss';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

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
