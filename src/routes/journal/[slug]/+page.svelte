<script lang="ts">
	import { blurhashToCssGradientString } from '@unpic/placeholder';
	import { Image } from '@unpic/svelte';
	import { type Post } from '$lib/types';
	import Prism from 'prismjs';
	import { onMount } from 'svelte';
	export let data: Post;

	$: ({ title, photo_metadata, content } = data);

	const placeholder = blurhashToCssGradientString(data.photo_metadata.blur_hash);

	const postImageCss = `border-radius: var(--theme-border-radius-default);
		box-shadow: 6px 6px 8px 3px rgba(0, 0, 0, 0.3);
		object-fit: cover;
	`;

	onMount(() => {
		Prism.highlightAll();
	});
</script>

<article class="post-wrapper">
	<h1 class="post-title">{title}</h1>
	<Image
		layout="fullWidth"
		class="post-image fade-in-image"
		src={photo_metadata.urls.full}
		alt={photo_metadata.alt_description}
		background={placeholder}
		loading="lazy"
		height={450}
		style={postImageCss}
	/>
	{@html content}
</article>

<style>
	:global(code[class*='language-'], pre[class*='language-']) {
		font-size: 1.4rem;
	}

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
</style>
