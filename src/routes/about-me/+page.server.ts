import type { Experience } from '$lib/types';

async function getExperiences() {
	let experiences: Experience[] = [];

	const paths = import.meta.glob('/src/routes/experiences/*.md', { eager: true });

	for (const mdExp in paths) {
		const file = paths[mdExp];
		const slug = mdExp?.split('/')?.at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Experience, 'slug'>;
			const experience = { ...metadata, slug } as Experience;
			experiences.push(experience);
		}
	}

	experiences = experiences.sort((a, b) => b.order - a.order);

	return experiences;
}

export async function load() {
	const experiences = await getExperiences();
	return { experiences };
}
