import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true,

			scss: {
				prependData: '@use "src/variables.scss" as *;'
			}
		})
	],

	kit: {
		paths: {
			base: dev ? '' : '/is-this-even-real-game',
		},

		adapter: adapter({}),
		alias: {
			$lib: './src/lib'
		}
	}
};

export default config;
