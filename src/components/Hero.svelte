<section class="section-hero b-border">

  <div class="hero">

    <div class="hero-text-box">
      <div class="hero-heading-name">
        <p aria-label="Salut from Mauricio">Hi there, I'm Mauricio &nbsp;</p><div class="wave">👋</div>
      </div>
      <h1 aria-label="Who is Mauricio" class="hero-title">
        Full Stack Developer based in Canada.
      </h1>
      <p aria-label="Short about Mauricio" class="hero-text">
        I specialize in building exceptional web experiences and robust products.
        With my expertise in systems architecture, frontend, backend and various
        database technologies, I can help you bring your ideas to life.
      </p>
      <a aria-label="More about Mauricio" class="hero-link" href="/about-me">More about me</a>
    </div><!--  end.hero-text-box -->


  </div> <!--  end.hero -->

</section>

<style>
  .section-hero {
    display: flex;
    justify-content: center;
    overflow: hidden;
    padding: 3.2rem 0 6.4rem 0;
    margin-bottom: 4.8rem;
    margin-top: 9.6rem;

    background-image: linear-gradient(180deg, var(--theme-background-default),var(--theme-background-secondary) 50%);
    box-shadow: 1.2rem 2.4rem 50px var(--theme-background-secondary);
  }

  .hero {
    max-width: 110rem;
    padding: 2.4rem;
  }

  .hero-text-box {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  .hero-heading-name,
  .hero-text {
    display: flex;
    align-items: center;
    & > .wave {
      font-size: 2.4rem
    }
  }

  .wave {

    animation: wave-hand 1.5s linear 0.75s 1 normal;
    transform-origin: 50% 50%;
}

  @keyframes wave-hand {
    0% { transform: rotate( 0.0deg) }
    10% { transform: rotate(20.0deg) }
    20% { transform: rotate(-10.0deg) }
    30% { transform: rotate(20.0deg) }
    40% { transform: rotate(-6.0deg) }
    50% { transform: rotate(12.0deg) }
    60% { transform: rotate( 0.0deg) }
    100% { transform: rotate( 0.0deg) }
  }


  .hero-title {

    opacity: 0;
    animation: bottomFadeIn 1s linear 1s normal forwards;

  }

  .hero-text {
    opacity: 0;
    animation: bottomFadeIn 1s linear 3s normal forwards;
  }

  .hero-link {
    align-self: baseline;

    transition: 0.25s ease;

    opacity: 0;
    animation: bottomFadeIn 1s linear 3s normal forwards;
  }


  @keyframes bottomFadeIn {
    0% {
      transform: translateY(2rem);
      bottom: 2rem;
      opacity: 0;
    }

    75% {
      bottom: 25%;
      opacity: 1;
    }

    100% {
      opacity: 100;
    }
  }

</style>
