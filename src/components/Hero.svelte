<script>
	import X from "./icons/social/X.svelte";
  import { MailUnreadOutline, LogoLinkedin, LogoGithub } from 'svelte-ionicons'

</script>

<section class="section-hero b-border">

  <div class="hero">

    <div class="hero-text-box">
      <div class="hero-heading-name">
        <p>Hi there, I'm Mauricio &nbsp;</p><div class="wave">👋</div>
      </div>
      <h1 class="hero-title">
        Full Stack Developer based in Canada.
      </h1>
      <p class="hero-text">
        I specialize in building exceptional web experiences and robust products.<br />
        With my expertise in systems architecture, frontend, backend and various
        database technologies, I can help you bring your ideas to life.
      </p>

      <div class="hero-social-icons">
        <ul class="social-icons">
          <li class="social-icon">
            <a href="https://www.linkedin.com/in/mauromercado/" target="_blank" rel="external">
              <LogoLinkedin />
            </a>
          </li>
          <li class="social-icon">
            <a href="https://github.com/maumercado" target="_blank" rel="external">
              <LogoGithub />
            </a>
          </li>
          <li class="social-icon">
            <a href="https://x.com/maumercado" target="_blank" rel="external">
              <X />
            </a>
          </li>
          <li class="social-icon">
            <a href="mailto:mau@codigo.sh" target="_blank" rel="external">
              <MailUnreadOutline />
            </a>
          </li>

            <!-- MailUnreadOutline -->
        </ul>
      </div> <!--  end.hero-social-icons -->

    </div><!--  end.hero-text-box -->

    <div class="hero-img-box">
      <!-- Placeholder for hero image of me -->
    </div> <!--  end.hero-img-box -->

  </div> <!--  end.hero -->

</section>

<style>
  .section-hero {
    margin-bottom: 2.4rem;
    margin-top: 12.8rem;
    padding: 3.2rem 0 4.8rem 0;
  }

  .hero {
    display: flex;
    align-items: start;
    padding: 4.4rem;
    column-gap: 3.6rem;
  }

  .hero-text-box {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 2.4rem;
    padding: 3.6rem 0 3.6rem 0;
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

  .hero-title {
    opacity: 0;
    animation: bottomFadeIn 1s linear 1s normal forwards;
  }

  .hero-text {
    opacity: 0;
    animation: bottomFadeIn 1s linear 3s normal forwards;
  }

  .hero-social-icons {
    padding: 2rem 0 0 0;
    opacity: 0;
    animation: bottomFadeIn 1s linear 5s normal forwards;
  }

  .social-icons {
    display: flex;
    gap: 3.6rem;
    align-items: center;
  }

  .social-icon {
    transition: 0.25s ease;
    cursor: pointer;
    & svg {
      width: 3rem;
      height: 3rem;
    }
    &:hover {
      transform: scale(1.25);
    }
    & > a:hover {
      box-shadow: none;
    }
  }

  .hero-img-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3.6rem;
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
