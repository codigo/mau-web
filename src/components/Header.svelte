
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
  .content-wrapper {
    content: "";
    margin-bottom: 4cqmin;
  }
  .header {
    backdrop-filter: blur(1.2rem);
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }

  .main-nav {
    padding: 3.6rem 0;
  }

  .main-nav-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 4.8rem;
    justify-items: center;
  }

  .main-nav-link {
    transition: 0.25s ease;
  }

  .main-nav-list:hover {
    color: var(--theme-font-secondary);
  }


</style>
