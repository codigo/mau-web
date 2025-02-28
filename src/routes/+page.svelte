<script lang="ts">
	import Capabilities from '../components/Capabilities.svelte';
	import Hero from '../components/Hero.svelte';
	import TechStack from '../components/TechStack.svelte';
	import Testimonials from '../components/Testimonials/Testimonials.svelte';

	export let data;

	// Extract capabilities items or use fallback if not available
	$: capabilitiesArray =
		data.capabilities && 'items' in data.capabilities ? data.capabilities.items : [];
</script>

<Hero />
<Capabilities capabilities={capabilitiesArray} />
<Testimonials />
<TechStack />
