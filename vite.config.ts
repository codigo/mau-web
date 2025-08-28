/// <reference types="vitest" />
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig(async () => {
	const [enhancedImagesPlugin, sveltekitPlugin] = await Promise.all([enhancedImages(), sveltekit()]);

	return {
		plugins: [enhancedImagesPlugin, sveltekitPlugin],
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}'],
			environment: 'node',
			globals: true,
			pool: 'forks'
		}
	};
});
