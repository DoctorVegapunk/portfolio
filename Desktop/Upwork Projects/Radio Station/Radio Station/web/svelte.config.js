import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
        adapter: adapter({
            pages: 'public',
            assets: 'public',
            fallback: "404.html",
            precompress: false
		}),
    },
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	],
	vite: {
		resolve: {
			alias: {
				$components: resolve('./src/components'),
				$store: resolve('./src/store'),
			}
		}
	},
};

export default config;
