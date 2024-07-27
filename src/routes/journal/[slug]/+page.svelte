<script lang="ts">
	import { type Post } from '$lib/types';
	export let data: Post;
</script>

<article class="post-wrapper">
	<h1 class="post-title">{data.title}</h1>
	<img class="post-image" alt={data.img_url_alt} src={`${data.img_url}&w=800`} />
	{@html data.content}
</article>

<style>
	:global(code[class*='language-'], pre[class*='language-']) {
		font-size: 1.4rem;
	}

	.post-wrapper {
		display: flex;
		flex-direction: column;
		gap: 3.2rem;
		padding: 2.4rem;
	}

	.post-title {
		align-self: center;
	}

	.post-image {
		width: 100%;
		height: 45rem;
		border-radius: var(--theme-border-radius-default);
		box-shadow: 6px 6px 8px 3px rgba(0, 0, 0, 0.3);
		object-fit: cover;
	}
</style>
