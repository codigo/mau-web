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
    max-width: 140rem;
    margin: 0 auto;
    padding: 8rem 0 4.8rem 0;
  }

</style>
