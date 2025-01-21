import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'public', // Output directory for pages
			assets: 'public', // Output directory for assets
			fallback: null, // No fallback for purely static sites
			strict: false // Avoid errors for non-prerenderable routes
		}),
		prerender: {
			entries: [] // Exclude all routes if needed
		}
	}
};

export default config;
