import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
      		assets: 'build',
			fallback:"404.html"
		}),
		prerender: { 
			entries: [
				'/',
				'/g'
			] 
		}
	
	}
};

export default config;
