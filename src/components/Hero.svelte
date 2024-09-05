<script>
	import X from './icons/social/X.svelte';
	import { MailUnreadOutline, LogoLinkedin, LogoGithub } from 'svelte-ionicons';
</script>

<section class="section-hero">
	<div class="hero-intro">
		<div class="hero-text-box">
			<div class="hero-heading-name">
				<p>Hi there, I'm Mauricio &nbsp;</p>
				<div class="wave">👋</div>
			</div>
			<h1 class="hero-title">Full Stack Developer based in Canada.</h1>
			<p class="hero-text">
				I specialize in building exceptional user experiences and robust products.<br />
				With my expertise in systems architecture, frontend, backend and various database technologies,
				I can help you bring your ideas to life.
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
				</ul>
			</div>
			<!--  end.hero-social-icons -->
		</div>
		<!--  end.hero-text-box -->

		<div class="hero-img-box">
			<!-- Placeholder for hero image of me -->
		</div>
		<!--  end.hero-img-box -->
	</div>
	<!--  end.hero -->
</section>

<style>
	.section-hero {
		padding: 1.2rem 1.6rem;
	}

	.hero-intro {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		place-items: center;
		column-gap: 3.6rem;
	}

	@media (max-width: 980px) {
		.hero-intro {
			grid-template-columns: auto;
		}
	}

	.hero-text-box {
		display: grid;
		row-gap: 3.2rem;
	}

	@media (max-width: 980px) {
		.hero-text-box {
			row-gap: 1.6rem;
		}
	}

	.hero-heading-name,
	.hero-text {
		display: flex;
		align-items: center;
		& > .wave {
			font-size: 2.4rem;
		}
	}

	.wave {
		animation: wave-hand 1.5s linear 0.5s 1 normal;
		transform-origin: 50% 50%;
	}

	.hero-title {
		opacity: 0;
		animation: bottomFadeIn 1s linear 0.75s normal forwards;
	}

	.hero-text {
		opacity: 0;
		animation: bottomFadeIn 1s linear 1.25s normal forwards;
	}

	.hero-social-icons {
		opacity: 0;
		animation: bottomFadeIn 1s linear 1.25s normal forwards;
	}

	.social-icons {
		display: flex;
		gap: 3.6rem;
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
		padding: 3.6rem;
	}

	@keyframes wave-hand {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(20deg);
		}
		20% {
			transform: rotate(-10deg);
		}
		30% {
			transform: rotate(20deg);
		}
		40% {
			transform: rotate(-6deg);
		}
		50% {
			transform: rotate(12deg);
		}
		60% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
