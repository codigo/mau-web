import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.dirname(__dirname);

const DEFAULT_OUTPUT_DIR = path.join(projectRoot, '.generated');
const DEFAULT_OUTPUT_FILE = 'about-me.txt';

const ensureDirectoryExists = async (directory) => {
	try {
		await fs.access(directory);
	} catch {
		await fs.mkdir(directory, { recursive: true });
	}
};

const readFiles = async (directory, fileFilter) => {
	const files = await fs.readdir(directory);
	const filteredFiles = files.filter(fileFilter);

	return Promise.all(
		filteredFiles.map(async (file) => {
			const filePath = path.join(directory, file);
			const content = await fs.readFile(filePath, 'utf-8');
			return { fileName: file, content };
		})
	);
};

const readMarkdownFiles = (directory) => readFiles(directory, (file) => file.endsWith('.md'));

const extractDataFromContent = (content, regex) => {
	const match = content.match(regex);
	return match ? match[1] : '';
};

const parseTechStackItem = (item) => {
	const name = extractDataFromContent(item, /name: '([^']+)'/);
	const category = extractDataFromContent(item, /category: '([^']+)'/);
	return { name, category };
};

const getTechStack = async () => {
	const techStackPath = path.join(projectRoot, 'src', 'constants', 'techStack.ts');
	const techStackContent = await fs.readFile(techStackPath, 'utf-8');

	const techStackData = extractDataFromContent(
		techStackContent,
		/export const TECH_STACK: TechStack\[] = \[([\s\S]*?)\];/
	);

	return techStackData
		.split('},')
		.map((item) => item.trim())
		.filter((item) => item.length > 0)
		.map(parseTechStackItem);
};

const groupBy = (array, key) =>
	array.reduce((acc, item) => {
		const group = item[key];
		if (!acc[group]) acc[group] = [];
		acc[group].push(item);
		return acc;
	}, {});

const formatExperiences = (experiences) =>
	experiences
		.map(({ content }) => content.replace(/^(order|next|previous):.*$\n?/gm, '').trim())
		.join('\n\n');

const formatTechStack = (techStack) => {
	const techStackByCategory = groupBy(techStack, 'category');
	return Object.entries(techStackByCategory)
		.map(
			([category, technologies]) =>
				`${category}:\n${technologies.map((tech) => tech.name).join(', ')}`
		)
		.join('\n\n');
};

const createAboutMeContent = async () => {
	const experiencesDir = path.join(projectRoot, 'src', 'routes', 'experiences');
	const experiences = await readMarkdownFiles(experiencesDir);
	const techStack = await getTechStack();

	return [
		'About Me\n========\n',
		'Experiences\n-----------\n',
		formatExperiences(experiences),
		'Tech Stack\n----------\n',
		formatTechStack(techStack)
	].join('\n');
};

const createAboutMeFile = async (
	outputPath = path.join(DEFAULT_OUTPUT_DIR, DEFAULT_OUTPUT_FILE)
) => {
	const outputDir = path.dirname(outputPath);
	await ensureDirectoryExists(outputDir);

	const aboutMeContent = await createAboutMeContent();
	await fs.writeFile(outputPath, aboutMeContent);
	console.log(`About Me file created at: ${outputPath}`);
};

// Allow custom output path from command line argument
const customOutputPath = process.argv[2];
createAboutMeFile(customOutputPath).catch(console.error);
