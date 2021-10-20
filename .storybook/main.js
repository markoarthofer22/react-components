const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
    stories: [
        '../src/components/**/*.stories.js',
        '../src/models/**/*.stories.js',
    ],
    addons: [
        '@storybook/addon-knobs',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-backgrounds/register',
        '@storybook/addon-essentials',
        '@storybook/addon-docs',
        '@storybook/addon-viewport',
        '@storybook/addon-a11y',
    ],
};
