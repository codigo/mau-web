<script>
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

</script>

<Header />

<main class="main">

  <slot />

</main>

<Footer />

<style>
  .main {
    max-width: var(--max-width);
    margin: 0 auto;
    padding-top: 8rem;
  }

</style>
