<script lang="ts">
	import { ChevronBack, ChevronForward } from 'svelte-ionicons'
	import { marked } from 'marked';
	import { goto } from '$app/navigation';

	export let data;

	$: ({ content = '', title, next, previous } = data);

	const handleClick = (slug: string | undefined) => {
		if (!slug) return;

		goto(slug);
	};

</script>

<div class="markdown-wrapper">
	<h1>{title}</h1>
	{@html marked(content)}
	<div class="navigation-links pico">
		<button on:click={() => handleClick(previous)} disabled={!Boolean(previous)} class="goto outline contrast" role="link">
			<ChevronBack />
		</button>
		<button on:click={() => handleClick(next)} disabled={!Boolean(next)} class="goto next outline contrast" role="link">
			<ChevronForward />
		</button>
	</div>
</div>

<style>
	@import '$lib/assets/css/md-styles.css';

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
