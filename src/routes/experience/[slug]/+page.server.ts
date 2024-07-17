import { type ExperienceData, getExperiences } from './data.server';
import { type ErrorStatus } from '$lib/types';

interface ResultData {
	title: string;
	content: string;
	slug: string;
}

export async function load({ params }: { params: { slug: string } }): Promise<ResultData> {
	const { slug } = params;

	const experiences = await getExperiences(slug);

	return {
		title: experiences[slug].title,
		content: experiences[slug].content,
		slug
	};
}
