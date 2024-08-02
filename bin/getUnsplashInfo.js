const args = process.argv.slice(2);
const photoId = args[1];
const key = args[0];
const headers = { Authorization: `Client-ID ${key}` };
const api = fetch(`https://api.unsplash.com/photos/${photoId}`, { headers });

const response = await api;

if (!response.ok) {
	console.error('Error:', response.statusText);
	process.exit(1);
}

const { blur_hash, urls, color, id, description, alt_description } = await response.json();
console.log(
	JSON.stringify(
		{
			blur_hash,
			urls,
			color,
			id,
			description,
			alt_description
		},
		null,
		2
	)
);
