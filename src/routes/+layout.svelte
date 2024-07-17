<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="main-layout">
	<Header />

	<main class="main">
		<slot />
	</main>

	<Footer />
</div>

<style>
	.main-layout {
		display: grid;
		grid-template-rows: auto 1fr auto;
	}

	.main {
		max-width: var(--max-width);
		margin: 0 auto;
		padding-top: 8rem;
	}
</style>
