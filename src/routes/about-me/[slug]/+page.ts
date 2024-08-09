import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const experience = await import(`../../experiences/${params.slug}.md`);

		console.log(experience);

		return {
			content: experience.default,
			meta: { ...experience.metadata, slug: params.slug }
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
