import { redirect } from '@sveltejs/kit';
import type { ServerLoadEvent } from '@sveltejs/kit';

export function load({ url }: ServerLoadEvent) {
	if (url.pathname === '/journal' || url.pathname === '/journal/') {
		throw redirect(308, '/journal/page/1');
	}
}
