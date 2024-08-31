import type { Handle } from '@sveltejs/kit';
import pino from 'pino';

// Create a Pino logger instance
const logger = pino({
	level: 'info',
	timestamp: pino.stdTimeFunctions.isoTime
});

// Separate logging function
function logRequest(event: Parameters<Handle>[0]['event'], duration?: number, status?: number) {
	const logData = {
		method: event.request.method,
		url: event.url.pathname,
		headers: Object.fromEntries(event.request.headers)
	};

	if (duration !== undefined && status !== undefined) {
		logger.info({
			msg: 'Request completed',
			...logData,
			duration: `${duration}ms`,
			status
		});
	} else {
		logger.info({
			msg: 'Incoming request',
			...logData
		});
	}
}

export const handle: Handle = async function ({ event, resolve }) {
	const start_time = Date.now();

	// Log incoming request
	logRequest(event);

	// Wait on response, run other hooks and load
	const response = await resolve(event);

	const duration = Date.now() - start_time;

	// Log completed request
	logRequest(event, duration, response.status);

	return response;
};
