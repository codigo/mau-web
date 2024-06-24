<script>
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
	import TechStack from '../components/TechStack.svelte';

</script>

<Header />

<main class="main">

  <slot />

  <TechStack />

</main>

<Footer />

<style>
  .main {
    max-width: 140rem;
    margin: 0 auto;
  }

</style>


