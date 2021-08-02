const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
    stories: [
        '../src/components/**/*.stories.js',
        '../src/models/**/*.stories.js',
    ],
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-knobs',
        '@storybook/addon-backgrounds/register',
        '@storybook/addon-essentials',
        '@storybook/addon-docs',
        '@storybook/addon-viewport',
        '@storybook/addon-a11y',
    ],
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        });

        return config;
    },
};
