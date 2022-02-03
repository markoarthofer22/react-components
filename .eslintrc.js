module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
    },
    parser: '@typescript-eslint/parser',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint', '@emotion', 'prettier', 'react'],
    extends: [
        'airbnb',
        'airbnb-typescript',
        'prettier',
        'plugin:storybook/recommended',
    ],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    rules: {
        'no-unused-vars': 'warn',
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true,
                variables: true,
            },
        ],
        'react/jsx-uses-vars': 'error',
        'react/jsx-uses-react': 'error',
        'no-restricted-globals': 'off',
        'no-underscore-dangle': 'off',
        'no-prototype-builtins': 'off',
        'no-nested-ternary': 'off',
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'off',
        'import/no-cycle': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-param-reassign': 0,
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': ['off'],
        'react/no-array-index-key': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
    },
};
