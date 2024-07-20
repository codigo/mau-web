import { z } from 'zod';
import { type RequestEvent, type ActionResult, type ActionFailure, fail } from '@sveltejs/kit';
import { sendMessage } from '$lib/services/pb';

const ContactSchema = z.object({
	name: z.string().trim().min(2, 'Name must be at least 2 characters'),
	email: z.string().trim().email().min(5, 'Email must be at least 5 characters'),
	message: z.string().trim().min(10, 'Message must be at least 10 characters')
});

export const actions = {
	email: async (event: RequestEvent) => {
		const data = await event.request.formData();
		const name = data.get('name') as string;
		const email = data.get('email') as string;
		const message = data.get('message') as string;

		const result = ContactSchema.safeParse({ name, email, message });
		if (!result.success) {
			const errors = result.error.flatten().fieldErrors;
			return fail(400, { data: Object.fromEntries(data), errors });
		}

		try {
			await sendMessage(name, email, message);
			return {
				type: 'success',
				status: 200,
				data: { done: 'Message Sent!' }
			};
		} catch (e) {
			let message: string = '';
			if (e instanceof Error) {
				message = e.message;
			} else {
				message = 'An error occurred while sending the message';
			}
			return fail(500, {
				errors: { message }
			});
		}
	}
};
