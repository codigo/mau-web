import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import PocketBase, { type ListResult } from 'pocketbase';
import { type Post } from '$lib/types';
import type { Logger } from '$lib/types'; // You'll need to create this type

class PocketBaseSingleton {
	private static instance: PocketBase;

	private constructor() {}

	public static getInstance(): PocketBase {
		if (!PocketBaseSingleton.instance) {
			PocketBaseSingleton.instance = new PocketBase(PUBLIC_POCKETBASE_URL);
		}
		return PocketBaseSingleton.instance;
	}
}

const pb = PocketBaseSingleton.getInstance();
pb.autoCancellation(true);

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

export const getPostBySlug = async (slug: string, log?: Logger) => {
	log?.info('Fetching post by slug', 'getPostBySlug', { slug });
	try {
		const result = await pb.collection('posts').getFirstListItem(`slug="${slug}" && publish=True`);

		if (!result) {
			log?.warn('Post not found', 'getPostBySlug', { slug });
			return null;
		}

		const post = await pb.collection('posts').getOne<Post>(result.id);
		log?.info('Post fetched successfully', 'getPostBySlug', { slug, postId: post.id });
		return post;
	} catch (error) {
		log?.error('Error fetching post', 'getPostBySlug', { slug, error });
		throw error;
	}
};
