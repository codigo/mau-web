<script lang="ts">
	import { onMount } from 'svelte';
	import Hero from '../components/Hero.svelte';
	import TechStack from '../components/TechStack.svelte';
	import Testimonials from '../components/Testimonials/Testimonials.svelte';
	import CapabilitiesSkeleton from '../components/CapabilitiesSkeleton.svelte';

	export let data;

	// Extract capabilities items or use fallback if not available
	$: capabilitiesArray =
		data.capabilities && 'items' in data.capabilities ? data.capabilities.items : [];

	// For lazy loading
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let CapabilitiesComponent: any = null;
	let showCapabilities = false;

	onMount(() => {
		// Load component when the component is mounted
		import('../components/Capabilities.svelte').then((module) => {
			CapabilitiesComponent = module.default;
			showCapabilities = true;
		});
	});
</script>

<Hero />

{#if showCapabilities && CapabilitiesComponent}
	<svelte:component this={CapabilitiesComponent} capabilities={capabilitiesArray} />
{:else}
	<CapabilitiesSkeleton count={4} />
{/if}

<Testimonials />
<TechStack />
