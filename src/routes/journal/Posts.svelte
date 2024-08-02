<script lang="ts">
	import { blurhashToCssGradientString } from '@unpic/placeholder';
	import { Image } from '@unpic/svelte';
	import { goto } from '$app/navigation';
	import type { Post } from '$lib/types';
	export let posts: Post[];

	const onClick = (link: string) => {
		goto(link);
	};
</script>

<div class="posts-wrapper">
	<ul class="posts-list">
		{#each posts as post, idx}
			<li class="post-item">
				<article class="article">
					<button
						class="article-wrapper"
						role="link"
						tabindex={idx}
						on:click={() => onClick(`/journal/${post.slug}`)}
					>
						<img
							class="post-image"
							alt={post.img_url_alt}
							src={`${post.img_url}&w=400`}
							loading="lazy"
						/>
						<ul class="post-tags">
							{#each post.tags.split(',') as tag}
								<li class="post-tag-item">#{tag.trim()}</li>
							{/each}
						</ul>
						<h3>{post.title}</h3>
					</button>
				</article>
			</li>
		{/each}
	</ul>
</div>

<style>
	.posts-wrapper {
		padding: 3.2rem;
	}

	.posts-list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
	}

	.post-item {
		background: var(--theme-card-background-default);
		border-radius: var(--theme-border-radius-default);
		box-shadow: 6px 6px 8px 3px rgba(0, 0, 0, 0.3);
		transition: all 0.4s ease-out;
	}

	.article {
		height: 100%;
	}

	.article-wrapper {
		display: grid;
		padding: 2.4rem;
		row-gap: 1.6rem;
		height: 100%;

		border: unset;
		text-align: start;
		background-color: unset;
		align-content: space-between;
	}

	.post-item:hover {
		transform: scale(1.02);
		transition: 0.3s;
	}

	.post-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.post-tag-item {
		border: 1px solid var(--theme-background-secondary);
		padding: 0 1rem;
		border-radius: var(--theme-border-radius-default);
		/* box-shadow: 6px 6px 8px 3px rgba(0, 0, 0, 0.3); */
		font-size: 1.2rem;
		color: var(--theme-background-secondary);
	}

	.post-image {
		border-radius: var(--theme-border-radius-default);
		object-fit: cover;
		width: 100%;
		height: 18rem;
	}
</style>
