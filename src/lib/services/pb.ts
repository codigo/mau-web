import { type Post } from '$lib/types';
import { type Logger } from 'pino';
import { logger } from '$lib/stores/loggerStore';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import PocketBase, { type ListResult } from 'pocketbase';

class PocketBaseSingleton {
	private static instance: PocketBase;

	private constructor() {}

	public static getInstance(): PocketBase {
		if (!PocketBaseSingleton.instance) {
			logger
				.child({ module: 'pb' })
				.info({ url: PUBLIC_POCKETBASE_URL }, 'Creating new PocketBase instance');
			PocketBaseSingleton.instance = new PocketBase(PUBLIC_POCKETBASE_URL);
		}
		return PocketBaseSingleton.instance;
	}
}

const pb = PocketBaseSingleton.getInstance();
pb.autoCancellation(true);

export default pb;

export const sendMessage = async (name: string, email: string, message: string, log?: Logger) => {
	log?.info({ name, email, message }, 'Sending message');
	try {
		const result = await pb.collection('messages').create({
			name,
			email,
			message
		});
		log?.info({ result }, 'Message sent');
		return result;
	} catch (error) {
		log?.error({ error }, 'Error sending message');
		throw error;
	}
};

export const getAllPosts = (log?: Logger): Promise<ListResult<Post>> => {
	try {
		log?.info('Fetching all posts');
		return pb.collection('posts').getList(1, 50, { sort: '-created', filter: 'publish=true' });
	} catch (error) {
		log?.error({ error }, 'Error fetching all posts');
		throw error;
	}
};

export const getPostBySlug = async (slug: string, log?: Logger) => {
	log?.info({ slug }, `Fetching post by slug`);
	try {
		const result = await pb.collection('posts').getFirstListItem(`slug="${slug}" && publish=True`);

		if (!result) {
			log?.warn({ slug }, 'Post not found');
			return null;
		}

		const post = await pb.collection('posts').getOne<Post>(result.id);
		log?.info({ slug, postId: post.id }, 'Post fetched successfully');
		return post;
	} catch (error) {
		log?.error({ slug, error }, 'Error fetching post');
		throw error;
	}
};
