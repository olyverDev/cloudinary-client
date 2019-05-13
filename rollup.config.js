import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';

const CopyPlugin = require('./rollup/copy.js');

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.jsx',
  output: {
    file: 'public/bundle.js',
    format: 'esm',
    sourcemap: !production,
    sourcemapFile: 'public/bundle.js'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(production ? 'production' : 'development')
    }),
    CopyPlugin({
      'src/index.html': 'public/index.html',
    }),
    production && uglify()
  ]
};
