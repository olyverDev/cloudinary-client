import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/index.js',
	output: {
		file: production ? 'build/bundle.js' : 'public/bundle.js',
		format: 'cjs',
		sourcemap: !production
	},
	plugins: [
		resolve(),
		commonjs(),
		babel({
      exclude: 'node_modules/**'
    }),
		production && uglify()
	]
};
