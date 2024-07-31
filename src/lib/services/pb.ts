import { POCKETBASE_URL } from '$env/static/private';
import PocketBase, { type ListResult } from 'pocketbase';
import { type Post } from '$lib/types';

class PocketBaseSingleton {
	private static instance: PocketBase;

	private constructor() {}

	public static getInstance(): PocketBase {
		if (!PocketBaseSingleton.instance) {
			PocketBaseSingleton.instance = new PocketBase(POCKETBASE_URL);
		}
		return PocketBaseSingleton.instance;
	}
}

const pb = PocketBaseSingleton.getInstance();

export default pb;

export const sendMessage = async (name: string, email: string, message: string) => {
	return pb.collection('messages').create({
		name,
		email,
		message
	});
};

export const getAllPosts = (): Promise<ListResult<Post>> => {
	return pb.collection('posts').getList(1, 50, { sort: '-created', filter: 'publish=true' });
};

export const getPostBySlug = async (slug: string) => {
	const result = await pb.collection('posts').getFirstListItem(`slug="${slug}" && publish=True`);

	if (!result) {
		return null;
	}

	return await pb.collection('posts').getOne<Post>(result.id);
};
