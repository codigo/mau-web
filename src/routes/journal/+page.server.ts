import { fail } from '@sveltejs/kit';
import { getAllPosts } from '$lib/services/pb';
import { ClientResponseError } from 'pocketbase';

export async function load({ setHeaders }) {
	setHeaders({
		'Cache-Control': 'max-age=3600, s-max-age=1'
	});

	try {
		const results = await getAllPosts();
		return {
			status: 200,
			...results
		};
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
