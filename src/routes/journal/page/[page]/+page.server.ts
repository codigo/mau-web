import { error } from '@sveltejs/kit';
import type { ServerLoadEvent } from '@sveltejs/kit';
import { getAllPaginatedPosts } from '$lib/services/pb';
import { ClientResponseError } from 'pocketbase';
import { blurhashToCssGradientString } from '@unpic/placeholder';
import { formatDate } from '$lib/utils';

export async function load({ params, setHeaders, locals }: ServerLoadEvent) {
	const log = locals.logger;

	setHeaders({
		'Cache-Control': 'max-age=3600, s-max-age=1'
	});

	const page = Number(params.page) || 1;

	try {
		const results = await getAllPaginatedPosts(page, log.child({ module: 'getAllPaginatedPosts' }));
		log.info({ results: results.items.length }, 'Posts fetched successfully');
		results.items.map((post) => {
			post.photo_metadata.blur_hash_style = `background-image: ${blurhashToCssGradientString(post.photo_metadata.blur_hash)}`;
			post.created = formatDate(post.created);
		});
		return results;
	} catch (e) {
		let message: string = '';
		let status = 500;
		if (e instanceof Error) {
			message = e.message;
		} else if (e instanceof ClientResponseError) {
			status = e.response.status;
			message = e.response.statusText;
		} else {
			message = 'An internal error occurred while fetching the posts';
		}

		throw error(status, { message });
	}
}
