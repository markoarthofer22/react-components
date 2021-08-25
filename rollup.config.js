import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';

const packageJson = require('./package.json');

export default {
    cache: false,
    input: 'lib/index.js',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        babel({
            exclude: /node_modules/,
            plugins: ['@babel/plugin-external-helpers'],
            externalHelpers: true,
        }),
        peerDepsExternal(),
        resolve(),
        commonjs(),
        postcss(),
    ],
};
