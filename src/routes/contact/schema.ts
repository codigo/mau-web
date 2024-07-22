import { z } from 'zod';

export const ContactSchema = z.object({
	name: z.string().trim().min(2, 'Name is too short'),
	email: z.string().trim().email(),
	content: z.string().trim().min(10, 'Message must be at least 10 characters'),
	'cf-turnstile-response': z.string().trim().min(1, 'Invalid CAPTCHA')
});
