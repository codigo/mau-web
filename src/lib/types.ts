export interface Testimonial {
	author: string;
	text: string;
	image: string;
}

export interface ErrorStatus {
	status: number;
	error: Error;
}

export interface Post {
	id: string;
	created: string;
	updated: string;
	slug: string;
	content: string;
	publish: boolean;
	title: string;
	tags: string;
	summary: string;
	img_url: string;
}
