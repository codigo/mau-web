<script lang="ts">
	import { type Post } from '$lib/types';
	import Prism from 'prismjs';
	import { onMount } from 'svelte';
	export let data: Post;

	onMount(() => {
		Prism.highlightAll();
	});
</script>

<article class="post-wrapper">
	<h1 class="post-title">{data.title}</h1>
	<img class="post-image" alt={data.img_url_alt} src={`${data.img_url}&w=1200`} loading="lazy" />
	{@html data.content}
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

	.post-image {
		height: 45rem;
		border-radius: var(--theme-border-radius-default);
		box-shadow: 6px 6px 8px 3px rgba(0, 0, 0, 0.3);
		object-fit: cover;
	}
</style>
