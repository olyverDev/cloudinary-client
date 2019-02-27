import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/index.js',
	output: {
		file: 'public/bundle.js',
		format: 'cjs',
		sourcemap: !production
	},
	plugins: [
		resolve(),
		commonjs(),
		production && uglify()
	]
};
