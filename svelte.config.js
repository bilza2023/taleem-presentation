import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			strict: false // Avoid errors for non-prerenderable routes
		}),
		prerender: {
			// Do not include any routes in the production build
			entries: [] // An empty array excludes all routes
		}
	}
};

export default config;
