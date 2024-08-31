import type { Handle } from '@sveltejs/kit';
import pino from 'pino';
import { v4 as uuidv4 } from 'uuid';

// Create a Pino logger instance
const logger = pino({
	level: process.env.LOG_LEVEL || 'info',
	timestamp: pino.stdTimeFunctions.isoTime
});

// Separate logging function
function logRequest(
	event: Parameters<Handle>[0]['event'],
	duration?: number,
	status?: number,
	error?: Error
) {
	const logData = {
		requestId: event.locals.requestId,
		method: event.request.method,
		url: event.url.pathname,
		headers: Object.fromEntries(event.request.headers)
	};

	if (error) {
		logger.error({
			msg: 'Request failed',
			...logData,
			error: error.message,
			stack: error.stack
		});
	} else if (duration !== undefined && status !== undefined) {
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

// Set up global handlers for unhandled promise rejections and uncaught exceptions
process.on('unhandledRejection', (reason, promise) => {
	logger.error({
		msg: 'Unhandled Promise Rejection',
		reason,
		promise
	});
});

process.on('uncaughtException', (error) => {
	logger.error({
		msg: 'Uncaught Exception',
		error: error.message,
		stack: error.stack
	});
});

export const handle: Handle = async function ({ event, resolve }) {
	const start_time = Date.now();

	event.locals.requestId = uuidv4();
	// Log incoming request
	logRequest(event);

	try {
		// Wait on response, run other hooks and load
		const response = await resolve(event);

		const duration = Date.now() - start_time;

		// Log completed request
		logRequest(event, duration, response.status);

		return response;
	} catch (error) {
		// Log any errors that occur during request processing
		logRequest(event, Date.now() - start_time, 500, error as Error);

		// Re-throw the error to be handled by SvelteKit's error handling
		throw error;
	}
};
