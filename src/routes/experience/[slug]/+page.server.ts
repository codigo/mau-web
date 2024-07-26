import { getExperiences } from './data.server';

interface ResultData {
	title: string;
	content: string;
	slug: string;
	next?: string;
	previous?: string;
}

export async function load({ params }: { params: { slug: string } }): Promise<ResultData> {
	const { slug } = params;

	const experiences = await getExperiences(slug);

	return {
		title: experiences[slug].title,
		content: experiences[slug].content,
		slug,
		next: experiences[slug].next,
		previous: experiences[slug].previous
	};
}
