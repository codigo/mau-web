import { error } from '@sveltejs/kit';
import { getPostBySlug } from '$lib/services/pb';
import { ClientResponseError } from 'pocketbase';

export async function load({ params, setHeaders, locals }) {
	const log = locals.log.child('journal');

	log.info('Fetching post', 'load', { slug: params.slug });

	setHeaders({
		'Cache-Control': 'max-age=3600, s-max-age=1'
	});

	const { slug } = params;

	try {
		const post = await getPostBySlug(slug, log.child('pb'));

		if (!post) {
			throw error(404, { message: `Post with slug ${slug} not found` });
		}

		return post;
	} catch (e) {
		log.error('Error fetching post', 'load', { error: e, slug: params.slug });
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
