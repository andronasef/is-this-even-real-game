import { sveltekit } from '@sveltejs/kit/vite';
import AutoImport from 'unplugin-auto-import/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(),
	AutoImport({
		include: [
			/\.svelte$/, /\.svelte\?svelte/,
		], imports: ["svelte", "svelte/transition", "svelte/easing", "svelte/motion", "svelte/store", "svelte/animate",], dts: "./src/auto-import.d.ts"

	}),
	],

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "src/variables.scss" as *;'
			}
		}
	}
};

export default config;
