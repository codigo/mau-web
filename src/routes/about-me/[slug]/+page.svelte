<script lang="ts">
	import { ChevronBack, ChevronForward } from 'svelte-ionicons';
	import type { ComponentType, SvelteComponent } from 'svelte';
	import type { Experience } from '$lib/types';
	import { goto } from '$app/navigation';

	export let data: { meta: Experience; content: ComponentType<SvelteComponent> };

	$: ({ content, meta } = data);

	const LINK_PREFIX = '/about-me/';

	const handleClick = (slug: string | undefined) => {
		if (!slug) return;

		goto(LINK_PREFIX + slug);
	};
</script>

<svelte:head>
	<title>My experience at {meta.company}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={`My experience at ${meta.company}`} />
</svelte:head>

<div class="markdown-wrapper">
	<h1>{meta.company}</h1>
	<svelte:component this={content} />
	<div class="navigation-links pico">
		<button
			on:click={() => handleClick(meta.previous)}
			disabled={!Boolean(meta.previous)}
			class="goto outline contrast"
			role="link"
		>
			<ChevronBack />
		</button>
		<button
			on:click={() => handleClick(meta.next)}
			disabled={!Boolean(meta.next)}
			class="goto next outline contrast"
			role="link"
		>
			<ChevronForward />
		</button>
	</div>
</div>

<style>
	.markdown-wrapper {
		display: grid;
		row-gap: 2.4rem;
		align-items: center;
	}

	:global(.markdown-wrapper ul:nth-child(5)) {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
		justify-content: flex-start;
	}

	:global(.markdown-wrapper ul:nth-child(5) li) {
		padding: 0.8rem;
		background-color: var(--theme-card-background-default);
		border-radius: var(--theme-border-radius-default);
	}

	:global(.markdown-wrapper ul:not(:nth-child(5))) {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	:global(.markdown-wrapper ul:not(:nth-child(5)) li) {
		padding: 0.8rem;
		list-style: square inside;
	}
	.navigation-links {
		padding-top: 3.2rem;
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: 1.6rem;
		justify-content: space-between;
	}

	.goto {
		display: grid;
		align-items: center;
		justify-content: space-between;
	}

	.next {
		grid-column: -1;
	}
</style>
