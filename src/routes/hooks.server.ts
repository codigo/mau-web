import type { Handle } from '@sveltejs/kit';
import pino from 'pino';
import { v4 as uuidv4 } from 'uuid';

// Create a Pino logger instance that writes to stdout
const logger = pino(
	{
		level: process.env.LOG_LEVEL || 'info',
		timestamp: pino.stdTimeFunctions.isoTime
	},
	pino.destination(1)
); // 1 is the file descriptor for stdout

function logRequest(
	event: Parameters<Handle>[0]['event'],
	duration?: number,
	status?: number,
	error?: Error
) {
	const headers = event.request.headers;
	const logData = {
		requestId: event.locals.requestId,
		method: event.request.method,
		url: event.url.pathname,
		clientIp: headers.get('CF-Connecting-IP') || headers.get('X-Forwarded-For'),
		protocol: headers.get('X-Forwarded-Proto'),
		cfRay: headers.get('CF-Ray'),
		userAgent: headers.get('User-Agent')
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

// Ensure unhandled rejections and exceptions are logged
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

	event.locals.requestId = event.request.headers.get('CF-Ray') || uuidv4();

	logRequest(event);

	try {
		const response = await resolve(event);
		const duration = Date.now() - start_time;
		logRequest(event, duration, response.status);
		return response;
	} catch (error) {
		logRequest(event, Date.now() - start_time, 500, error as Error);
		throw error;
	}
};

// Log when the server starts
logger.info('Server started');
