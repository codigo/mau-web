<script lang="ts">
	import Timeline from './Timeline.svelte';
</script>

<div class="about-layout">
	<section class="section-about-me b-border">
		<div class="about-me-img"></div>
		<!--  end.about-me-img -->

		<div class="about-me-text">
			<h2 class="about-me-heading">About Me</h2>
			<p class="about-me-paragraph">
				I'm Mauricio Mercado, a seasoned Software Developer with over a decade's experience in the
				industry.
			</p>
			<p class="about-me-paragraph">
				My journey began in the vibrant city of Barranquilla, Colombia, and has led me to the
				beautiful surroundings of Vancouver, Canada, where I now call home.
			</p>
			<p class="about-me-paragraph">
				II've worked with various teams, from remote squads scattered around the globe to on-site.
				Together, we've delivered highly reliable, high-performing products.
			</p>
		</div>
		<!--  end.about-me-text -->
	</section>

	<Timeline />

	<section class="skills-competences b-border">
		<h3>I've honed a diverse skill set over the years ...</h3>
		<ul class="skills-competences-list">
			<li>
				<strong>Frontend and Backend Development:</strong> Proficient in ReactJS, SvelteKit, NodeJS,
				Fastify, micro frontends and modular composition. And I'm always eager to learn new tools and
				technologies, like Rust.
			</li>
			<li>
				<strong>Systems Design:</strong> Specialist in designing scalable, maintainable systems.
			</li>
			<li>
				<strong>Databases:</strong> Experience with NoSQL (e.g. Redis, MongoDB, Elasticsearch) and SQL
				(e.g. PostgreSQL).
			</li>
			<li>
				<strong>Integration & Automation:</strong> Skilled using tools like Docker, Kubernetes, GitHub
				Actions and Apps and Terraform.
			</li>
			<li>
				<strong>Development Practices:</strong> Strong advocate for agile methodologies, automated testing,
				and functional programming.
			</li>
			<li>
				<strong>AI Systems:</strong> Knowledgeable in using OpenAI API, Ollama, and other AI systems
				to create personal projects, enhancing my capability to integrate advanced AI functionalities
				into applications.
			</li>
			<li>
				<strong>Architectural Versatility:</strong> Versed in microservices and modular monoliths, allowing
				for flexible and scalable system design.
			</li>
		</ul>
	</section>

	<section class="skills-competences-outro b-border">
		<div class="skills-competences-outro-text">
			<p>
				Outside my work life, I firmly believe in the ethos of lifelong learning. My GitHub
				portfolio <a href="https://github.com/maumercado">https://github.com/maumercado</a> provides
				a glimpse of my wide-ranging skills and interests, featuring projects like a React Native
				app with Expo, my blog
				<a href="https://codigos.notion.site">https://codigos.notion.site</a>, and two Fastify
				plugins, one for the Jaeger distributed tracing system​, and the second a plugin to inject
				secrets store in hashicorp vault into the service's environment at boot.
			</p>
			<p>
				I'm also a certified kitesurf instructor and love paddle boarding and surfing—the ocean is
				where I feel most at home. I enjoy hiking and, of course, the occasional drink with friends.
				Additionally, I believe in the power of mentorship, teaching others, and learning from thos
				around me.
			</p>
			<p>
				My mission remains steadfast: to continue growing, learning, and contributing to the
				software development landscape. I'm eager to collaborate on new projects and contribute my
				unique perspective to the tech community. Feel free to reach out if you believe we can
				create something remarkable together!
			</p>
		</div>
		<div class="skills-competences-outro-img">
			<h2>Placeholder for images??</h2>
		</div>
	</section>
</div>

<!--  end.about-layout -->

<style>
	.about-layout {
		display: grid;
		row-gap: 6.4rem;
		justify-items: center;
	}

	.section-about-me {
		padding: 1.2rem 1.6rem 6.4rem 1.6rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);

		column-gap: 3.6rem;
	}

	.about-me-text {
		display: grid;
		row-gap: 2.4rem;
		padding: 1.2rem 1.6rem 3.2rem 1.6rem;
	}

	.skills-competences {
		display: grid;
		grid-template-rows: 1fr auto;
		gap: 4.8rem;
		padding: 1.2rem 1.6rem 8rem 1.6rem;
	}

	.skills-competences-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3.2rem;
		align-items: center;
	}

	.skills-competences-outro {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 6.4rem;
		padding: 1.2rem 1.6rem 8rem 1.6rem;
	}

	.skills-competences-outro-text {
		display: grid;
		row-gap: 2.4rem;
	}
</style>
