import type { Actions, PageServerLoad } from './$types.js';
import { type RequestEvent, type ActionResult, type ActionFailure, fail } from '@sveltejs/kit';
import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { sendMessage } from '$lib/services/pb';
import { ContactSchema } from '$routes/contact/schema';

export const load: PageServerLoad = async () => {
	return { form: await superValidate(zod(ContactSchema)) };
}

export const actions: Actions = {
	email: async ({ request }: RequestEvent) => {

		const form = await superValidate(request, zod(ContactSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			const { name, email, content } = form.data;
			await sendMessage(name, email, content);
			return message(form, 'Message sent successfully');
		} catch (e) {
			let message: string = '';
			if (e instanceof Error) {
				message = e.message;
			} else {
				message = 'An error occurred while sending the message';
			}
			return fail(500, { form, message });
		}
	}
};
