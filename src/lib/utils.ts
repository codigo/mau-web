type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	// Safari is mad about dashes in the date
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return dateFormatter.format(dateToFormat);
}

export function splitArrayIntoChunks<T>(arr: T[], numChunks: number): T[][] {
	const chunks: T[][] = [];
	const n = arr.length;
	const chunkSize = Math.floor(n / numChunks);

	for (let i = 0; i < numChunks; i++) {
		const start = i * chunkSize;
		const end = start + chunkSize;
		chunks.push(arr.slice(start, end));
	}

	// Add the remaining elements to the last chunk
	chunks[numChunks - 1] = chunks[numChunks - 1].concat(arr.slice(chunkSize * numChunks));
	return chunks;
}

export function duplicateObjectsInArray<T extends { duplicate?: boolean }>(arr: T[][]): T[][] {
	return arr.map((chunk) => [...chunk, ...chunk.map((item) => ({ ...item, duplicate: true }))]);
}
