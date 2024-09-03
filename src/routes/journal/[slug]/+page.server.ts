import { error } from '@sveltejs/kit';
import { getPostBySlug } from '$lib/services/pb';
import { ClientResponseError } from 'pocketbase';

export async function load({ params, setHeaders, locals }) {
	const log = locals.logger('journal');

	log.info({ slug: params.slug }, 'Fetching post');

	setHeaders({
		'Cache-Control': 'max-age=3600, s-max-age=1'
	});

	const { slug } = params;

	try {
		const post = await getPostBySlug(slug, log.child({ module: 'getPostBySlug' }));

		if (!post) {
			throw error(404, { message: `Post with slug ${slug} not found` });
		}

		return post;
	} catch (e) {
		log.error({ error: e, slug: params.slug }, 'Error fetching post');
		let message: string = '';
		let status = 500;
		if (e instanceof ClientResponseError) {
			status = e.response.code;
			message = e.response.message;
		} else if (e instanceof Error) {
			message = e.message;
		} else {
			message = 'An internal error occurred while fetching the posts';
		}

		throw error(status, { message });
	}
}
