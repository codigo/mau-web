import { browser } from '$app/environment';
import { PUBLIC_LOG_LEVEL, PUBLIC_APP_ENV } from '$env/static/public';
import pino from 'pino';
import { v4 as uuidv4 } from 'uuid';

const logger = browser
	? pino({
			level: PUBLIC_APP_ENV === 'development' ? 'debug' : 'silent',
			browser: {
				asObject: true
			}
		})
	: pino(
			{
				level: PUBLIC_LOG_LEVEL || 'info',
				timestamp: pino.stdTimeFunctions.isoTime
			},
			pino.destination(1)
		);

export { logger, uuidv4 };
