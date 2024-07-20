import { POCKETBASE_URL } from '$env/static/private';
import PocketBase from 'pocketbase';

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
