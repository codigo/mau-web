<header class="header">

  <nav class="main-nav">
    <ul class="main-nav-list">
      <li><a class="main-nav-link" href="/">Home</a></li>
      <li><a class="main-nav-link" href="/about-me">About me</a></li>
      <li><a class="main-nav-link" href="/journal">Journal</a></li>
      <li><a class="main-nav-link" href="/#contact-me">Contact me</a></li>
    </ul>
  </nav>

</header>

<style lang="postcss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    height: 8rem;
    padding-top: 0;
    padding-bottom: 0;
    justify-content: center;
    z-index: 999;

    /* padding: 2.4rem 0 3.2rem 0; */
    /* background-color: rgba(55, 42, 62, 0.147); */
    backdrop-filter: saturate(180%) blur(1.6rem);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .04), 0 -1px 0 0 rgba(0, 0, 0, .08);
  }

  .main-nav {
    padding: 2rem 3.6rem;
  }

  .main-nav-list {
    display: flex;
    align-items: center;
    gap: 4.8rem;
  }

  .main-nav-link {
    transition: 0.25s ease;
  }

  .main-nav-list:hover {
    color: var(--theme-font-secondary);
  }


</style>
