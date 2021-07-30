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
    plugins: ['@typescript-eslint', 'prettier', 'react'],
    extends: ['airbnb-typescript/base', 'prettier'],
    rules: {
        'no-unused-vars': 'warn',
        'no-use-before-define': [
            'error',
            { functions: false, classes: true, variables: true },
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
    },
};
