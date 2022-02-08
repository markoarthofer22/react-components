module.exports = {
    stories: [
        '../src/@(components|models|helpers)/**/sandbox.stories.@(tsx|mdx)',
    ],
    addons: ['@storybook/addon-essentials'],
};
