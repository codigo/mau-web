import { error } from '@sveltejs/kit';
import { getAllPosts } from '$lib/services/pb';
import { ClientResponseError } from 'pocketbase';

export async function load({ setHeaders }) {
	// setHeaders({
	// 	'Cache-Control': 'max-age=3600, s-max-age=1'
	// });

	try {
		const results = await getAllPosts();
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
