export interface Testimonial {
	author: string;
	text: string;
	image: string;
}

export interface Capability {
	icon: string;
	title: string;
	items: { text: string; tooltip: string }[];
}

export interface ErrorStatus {
	status: number;
	error: Error;
}

export interface Experience {
	order: number;
	timeframe: string;
	company: string;
	description: string;
	slug: string;
	next?: string;
	previous?: string;
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
	photo_metadata: PhotoMetadata;
}

interface PhotoMetadata {
	blur_hash: string;
	blur_hash_style: string;
	urls: {
		raw: string;
		full: string;
		regular: string;
		small: string;
		thumb: string;
		small_s3: string;
	};
	color: string;
	id: string;
	description: string;
	alt_description: string;
}
