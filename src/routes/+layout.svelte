<script>
	import { navigating } from '$app/stores';

	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	export let data;
</script>

<div class="main-layout">
	<Header />

	<main class="main">
		{#key data.url}
			{#if $navigating}
				<div class="loading nav-transition" aria-busy={Boolean($navigating)}>
					<h3>Hold on! Good things are coming your way.</h3>
					<h3>Thanks for sticking with me!</h3>
					<span class="loader-cloud" />
				</div>
			{:else}
				<slot />
			{/if}
		{/key}
	</main>

	<Footer />
</div>

<style>
	.main-layout {
		display: grid;
		grid-template-rows: auto 1fr auto;
		min-height: 100vh;
		min-height: 100dvh;
	}

	.main {
		max-width: var(--max-width);
		margin: 0 auto;
		padding-top: 8rem;
	}

	.nav-transition {
		display: flex;
		gap: 1.6rem;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 50vh;
		height: 50dvh;
	}
</style>
