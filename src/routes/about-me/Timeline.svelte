<script lang="ts">
	import { goto } from '$app/navigation';

	interface TimelineEntry {
		id: string;
		company: string;
		description: string;
		link: string;
	}

	const timeline: TimelineEntry[] = [
		{
			id: '*',
			company: 'Codigo, Inc. Consulting',
			description: `A freelance software engineer specializing in custom software solutions,
			delivering efficient, scalable, and user-friendly systems tailored to client needs.`,
			link: '/experience/codigo'
		},
		{
			id: '2023 - Present',
			company: 'Coursedog',
			description: `Specialized in establishing real-time, bi-directional integrations with educational
      systems, ensuring seamless integration and compliance, and streamlining class, event,
      curriculum, and catalogue planning.`,
			link: '/experience/coursedog'
		},
		{
			id: '2022 - 2023',
			company: 'Doc.Ai / Sharecare',
			description: `Maintained and added features to SmartOmix, a decentralized research platform and built
      npm modules for component use and API client communication.`,
			link: '/experience/doc-ai'
		},
		{
			id: '2021 - 2022',
			company: 'Galvanize / Diligent',
			description: `Led a team adopting Fastify (NodeJS) and AWS Lambdas, mentored developers, and
      modernized a monolithic codebase through strangler patterns.`,
			link: '/experience/galvanize'
		},
		{
			id: '2021',
			company: 'Mobilelive INC',
			description: `As a Consultant Senior Engineer, I developed an abstraction layer with JavaScript
          called bolsterjs for micro frontend experiences and led the adoption of micro frontends.`,
			link: '/experience/mobilelive'
		},
		{
			id: '2020 - 2021',
			company: 'CTO.ai',
			description: `I guided developers in adopting an open-source collaboration model, built a GitHub
          application for data integration, and implemented automated quality control across
          projects.`,
			link: '/experience/cto-ai'
		},
		{
			id: '2019 - 2020',
			company: 'Telus',
			description: `I provided best practices and guidance to the developer community, led a team in
          creating a NodeJS-based framework, and managed infrastructure automation using Terraform
          and GCP APIs.`,
			link: '/experience/telus'
		},
		{
			id: '2019',
			company: 'Navarik',
			description: `Provided training, code standards, and best practices with NodeJS and React for the
          entire team of developers.`,
			link: '/experience/navarik'
		},
		{
			id: '2015 - 2018',
			company: 'HumanAPI',
			description: `Designed and deployed micro-services to retrieve, synchronize, and visualize user data,
          integrated metrics instrumentation, and used Elasticsearch and RabbitMQ.`,
			link: '/experience/humanapi'
		},
		{
			id: '2013 - 2015',
			company: 'Selfie INC.',
			description: `Led a team through the design, planning, execution, and deployment of all micro-services
          that composed the social application. I integrated Twilio API for 2FA and used MongoDB
          and Redis for data management.`,
			link: '/experience/selfie'
		},
		{
			id: '* - 2013',
			company: 'Consulting',
			description: `Developed applications for Coca Cola Colombia, Joyeria Caribe, and other clients,
			improving project management, communication, and e-commerce functionalities through custom
			software solutions. Enhanced user experience with innovative tools and streamlined internal
			processes.`,
			link: '/experience/freelance'
		}
	];

	const onClick = (link: string) => {
		goto(link);
	};
</script>

<section class="section-about-me-experience b-border">
	<h3 class="about-me-experience-title">
		My professional journey is marked by significant contributions to various organizations
	</h3>

	<ol class="timeline">
		{#each timeline as entry, index}
			{#if index % 2 === 0}
				<li class="timeline-entry">
					<p class="timeline-id">{entry.id}</p>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<button
						class="timeline-content"
						role="link"
						tabindex={index}
						on:click={() => onClick(entry.link)}
					>
						<h4 class="timeline-heading">
							{entry.company}
						</h4>
						<p class="timeline-text">
							{entry.description}
						</p>
						<!--  end.timeline-text -->
					</button>
					<!--  end.timeline-content -->
				</li>
				<!--  end.timeline-entry -->
			{:else}
				<li class="timeline-entry">
					<p class="timeline-id">{entry.id}</p>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<button
						class="timeline-content timeline-content--flipped"
						role="link"
						tabindex={index}
						on:click={() => onClick(entry.link)}
					>
						<h4 class="timeline-heading">
							{entry.company}
						</h4>
						<p class="timeline-text">
							{entry.description}
						</p>
						<!--  end.timeline-text -->
					</button>
					<!--  end.timeline-content flipped -->
				</li>
				<!--  end.timeline-entry -->
			{/if}
		{/each}
	</ol>
	<!--  end.timeline -->
</section>

<!--  end.section-about-me-experience -->

<style>
	.section-about-me-experience {
		display: grid;
		align-items: center;
		place-items: center;
		gap: 6.4rem;
		padding-bottom: 6.4rem;
	}

	.about-me-experience-title {
		margin: 0 auto;
		inline-size: 55%;
		text-align: center;
	}

	.timeline {
		position: relative;
	}
	.timeline:before {
		content: '';
		position: absolute;
		top: -3rem;
		left: 2rem;
		right: 17rem;
		width: 0.2rem;
		height: calc(100% + 3.6rem);
		background: linear-gradient(to bottom, #0f1218 0%, #2727278a 3%, #272727d0 80%, #0f1218 100%);
	}

	@media screen and (min-width: 65em) {
		.timeline:before {
			left: 50%;
			transform: translateX(-50%);
		}
	}

	.timeline-entry {
		position: relative;
		margin-bottom: 4rem;
	}
	.timeline-entry:after {
		content: '';
		display: table;
		clear: both;
	}

	.timeline-id {
		position: absolute;
		top: 1rem;
		padding: 0.4rem 1.2rem;
		background: #3333338a;
		margin-left: 0.2rem;
		border-radius: 0.5rem;
		box-shadow: 6px 6px 8px 3px rgba(0, 0, 0, 0.3);
	}

	@media screen and (min-width: 65em) {
		.timeline-id {
			left: 50%;
			transform: translateX(-50%);
			box-shadow: 6px 6px 8px 3px rgba(0, 0, 0, 0.3);
		}
	}

	.timeline-content {
		position: relative;
		margin-left: 22rem;

		padding: 1rem;
		background: #3333336a;
		border-radius: 0.5rem;
		box-shadow: 6px 6px 8px 3px rgba(0, 0, 0, 0.3);
		border: unset;
		text-align: start;
		transition: all 0.4s ease-out;
	}

	@media screen and (min-width: 65em) {
		.timeline-content {
			border: unset;
			padding: 2.4rem;
			margin-left: 0;
			width: calc(50% - 12.8rem);
			border-radius: 0.5rem;
			box-shadow: 6px 6px 8px 3px rgba(0, 0, 0, 0.3);
			cursor: pointer;
			text-align: start;
		}
	}
	.timeline-content:hover {
		transform: scale(1.05);
		transition: 0.3s;
	}

	@media screen and (min-width: 65em) {
		.timeline-content--flipped {
			float: right;
			box-shadow: 6px 6px 8px 3px rgba(0, 0, 0, 0.3);
		}
	}

	.timeline-heading {
		margin-bottom: 0.8rem;
	}

	.timeline-text:last-child {
		margin-bottom: 0;
	}
</style>
