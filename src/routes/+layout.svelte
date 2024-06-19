<script>
  import Header from '../components/Header.svelte';

  let year = new Date().getFullYear();

</script>

<Header />

<main>

  <slot />

</main>

<footer>
  <p>© {year}</p>
  <p>Made with ❤️ by Mauricio</p>

</footer>

<style>
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1.6rem;
    padding: 2.4rem 0 6.4rem 0;

  }
</style>
