// Export a function. Accept the base config as the only param.

module.exports = {
    stories: [
        '../src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
        '../src/components/**/stories.@(js|jsx|ts|tsx|mdx)',
        '../src/components/**/*development.stories.@(js|jsx|ts|tsx|mdx)',
        '../src/models/**/*.stories.@(js|jsx|ts|tsx|mdx)',
        '../src/models/**/stories.@(js|jsx|ts|tsx|mdx)',
        '../src/models/**/*development.stories.@(js|jsx|ts|tsx|mdx)',
    ],
    addons: [
        '@storybook/addon-knobs',
        '@storybook/addon-essentials',
        '@storybook/addon-viewport',
    ],
};
