
<div class="content-wrapper">
  <header class="header">
    <section class="main-nav">
      <ul class="main-nav-list">
        <li><a class="main-nav-link" href="/">Home</a></li>
        <li><a class="main-nav-link" href="/about-me">About me</a></li>
        <li><a class="main-nav-link" href="/journal">Journal</a></li>
        <li><a class="main-nav-link" href="/#contact-me">Contact me</a></li>
      </ul>
    </section>
  </header>
</div>

<style lang="postcss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    padding-top: 0;
    padding-bottom: 0;
    justify-content: center;
    z-index: 100;;
    backdrop-filter: blur(1.2rem);
    /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .04), 0 -1px 0 0 rgba(0, 0, 0, .08); */
  }

  .content-wrapper {
    content: "";
    margin-bottom: 4cqmin;
  }

  .main-nav {
    padding: 3.6rem 0;
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
