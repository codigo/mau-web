import { dirname } from 'path';
import { error } from '@sveltejs/kit';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import { readFile } from 'node:fs/promises';

export interface ExperienceData {
	[slug: string]: {
		title: string;
		content: string;
		next?: string;
		previous?: string;
	};
}

const experiences: ExperienceData = {
	codigo: {
		title: 'Codigo',
		content: './codigo.md'
	},
	freelance: {
		title: 'Codigo',
		content: './freelance.md'
	},
	coursedog: {
		title: 'Coursedog',
		content: './coursedog.md'
	},
	'doc-ai': {
		title: 'Doc.ai',
		content: './doc-ai.md'
	},
	galvanize: {
		title: 'Galvanize',
		content: './galvanize.md'
	},
	mobilelive: {
		title: 'MobileLive',
		content: './mobilelive.md'
	},
	'cto-ai': {
		title: 'CTO.ai',
		content: './cto-ai.md'
	},
	telus: {
		title: 'Telus',
		content: 'telus.md'
	},

	navarik: {
		title: 'Navarik',
		content: './navarik.md'
	},
	humanapi: {
		title: 'HumanAPI',
		content: './humanapi.md'
	},
	selfie: {
		title: 'Selfie INC',
		content: './selfie.md'
	}
};

const LINK_PREFIX = '/experience/';

export const getExperiences = async (slug: string): Promise<ExperienceData> => {
	const keys = Object.keys(experiences);
	const index = keys.indexOf(slug);

	if (index === -1) {
		throw error(404, 'Page not found');
	}

	const previous = index > 0 ? `${LINK_PREFIX}${keys[index - 1]}` : null;
	const next = index < keys.length - 1 ? `${LINK_PREFIX}${keys[index + 1]}` : null;

	return {
		[slug]: {
			title: experiences[slug].title,
			content: await parseMd(experiences[slug].content),
			next: next ? next : undefined,
			previous: previous ? previous : undefined,
		}
	};
}

const parseMd = async (filepath: string): Promise<string> => {
	const resolvedFpath = resolve(join(dirname(fileURLToPath(import.meta.url)), filepath));
	const file = await readFile(resolvedFpath, 'utf-8');
	return marked(file);
};
