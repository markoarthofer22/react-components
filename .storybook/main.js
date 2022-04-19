module.exports = {
    stories: [
        '../src/@(components|models|helpers)/**/sandbox.stories.@(tsx|mdx)',
    ],
    addons: ['@storybook/addon-essentials'],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
        });
        return config;
    },
};
