<script lang="ts">
	import { blurhashToCssGradientString } from '@unpic/placeholder';
	import { Image } from '@unpic/svelte';
	import { type Post } from '$lib/types';
	import Prism from 'prismjs';
	import 'prismjs/components/prism-python';
	import 'prismjs/components/prism-bash';
	import 'prismjs/components/prism-javascript';
	import 'prismjs/components/prism-typescript';
	import 'prismjs/components/prism-json';
	import 'prismjs/components/prism-css';
	import 'prismjs/components/prism-markup';
	import 'prismjs/components/prism-markdown';
	import 'prismjs/components/prism-yaml';
	import { onMount } from 'svelte';
	export let data: Post;

	$: ({ title, photo_metadata, content } = data);

	const placeholder = blurhashToCssGradientString(data.photo_metadata.blur_hash);

	onMount(() => {
		Prism.highlightAll();
	});

	const onLoadImage = () => {
		document.querySelector('.post-image')?.classList.add('fade-in-image');
	};
</script>

<article class="post-wrapper">
	<h1 class="post-title">{title}</h1>
	<div class="background-blur" style={`background-image: ${placeholder}`}>
		<Image
			class="post-image"
			layout="fullWidth"
			src={photo_metadata.urls.regular}
			alt={photo_metadata.alt_description}
			loading="lazy"
			height={450}
			on:load={onLoadImage}
		/>
	</div>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html content}
</article>

<style>
	.post-wrapper {
		margin: 0 auto;
		width: 85%;
		display: flex;
		flex-direction: column;
		gap: 3.6rem;
		padding: 2.4rem;
	}

	.post-title {
		align-self: center;
	}

	.background-blur {
		width: 100%;
		height: 450px;
		opacity: 1;
		border-radius: var(--theme-border-radius-default);
		object-fit: cover;
	}
</style>
