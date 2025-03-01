import type { ServerLoadEvent } from '@sveltejs/kit';
import { ClientResponseError } from 'pocketbase';
import { getCapabilities } from '$lib/services/pb';

export async function load({ locals }: ServerLoadEvent) {
	const log = locals.logger;
	try {
		const capabilities = await getCapabilities(log);
		return { capabilities };
	} catch (error) {
		if (error instanceof ClientResponseError) {
			log.error({ error: error.message }, 'Error fetching capabilities');
		} else {
			log.error({ error }, 'Error fetching capabilities');
		}
		return { capabilities: [] };
	}
}
