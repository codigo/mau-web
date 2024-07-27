import { fail } from '@sveltejs/kit';
import { getPostBySlug } from '$lib/services/pb';
import { ClientResponseError } from 'pocketbase';

export async function load({ params, setHeaders }) {
	setHeaders({
		'Cache-Control': 'max-age=3600, s-max-age=1'
	});

	const { slug } = params;

	try {
		const post = await getPostBySlug(slug);

		if (!post) {
			return fail(404, { message: `Post with slug ${slug} not found` });
		}

		return post;
	} catch (e) {
		let message: string = '';
		let status = 500;
		let stack: string | undefined = '';
		if (e instanceof Error) {
			message = e.message;
			stack = e.stack;
		} else if (e instanceof ClientResponseError) {
			status = e.response.status;
			message = e.response.statusText;
			stack = e.stack;
		} else {
			message = 'An internal error occurred while fetching the posts';
		}

		return fail(status, { message, stack });
	}
}
