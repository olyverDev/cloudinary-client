import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import css from 'rollup-plugin-css-only';
import image from 'rollup-plugin-img';
import json from 'rollup-plugin-json';

import { getNamedExports } from './rollup/namedExports.js';
import CopyPluginLocal from './rollup/copy.js';

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
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    resolve({
      extensions: ['.js', '.jsx', '.json'],
      jsnext: true,
      preferBuiltins: true,
      browser: true,
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports:
      {
        // https://rollupjs.org/guide/en/#error-name-is-not-exported-by-module-
         './node_modules/react/index.js': 
         [
            'cloneElement', 
            'createElement', 
            'PropTypes', 
            'Children', 
            'Component',
            'PureComponent',
            'useContext',
            'useMemo',
            'useEffect',
            'useLayoutEffect',
            'useRef',
            'useReducer',
         ],
         './node_modules/react-dom/index.js': 
         [
            'unstable_batchedUpdates',
         ],
         './node_modules/react-is/index.js': ['isValidElementType', 'isContextConsumer'],

      }
      // namedExports: {
      //   ...getNamedExports([
      //     'react',
      //     'react-dom',
      //     'react-is',
      //   ]),
      // },
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(production ? 'production' : 'development')
    }),
    image(),
    json(),
    css({ output: 'public/bundle.css' }),
    CopyPluginLocal({
      'src/index.html': 'public/index.html',
    }),
    production && uglify({
     sourcemap: false,
    })
  ]
};
