import type { Handle } from '@sveltejs/kit';

export const logger: Handle = async function ({ event, resolve }) {
	const start_time = Date.now();
	// Wait on response, run other hooks and load
	const response = await resolve(event);

	console.log(`${Date.now() - start_time}ms  ${event.request.method} ${event.url.pathname}`);

	return response;
};
