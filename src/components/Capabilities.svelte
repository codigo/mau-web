<section class="section-capabilities b-border">
	<div class="capabilities">
		<div class="capability capability-systems-architecture">
			<div class="capability-icon">📐</div>
			<h3 class="capability-text">Systems Architecture</h3>
			<ul class="capability-list">
				<li class="capability-item">Scalability</li>
				<li class="capability-item">Performance</li>
				<li class="capability-item">Reliability</li>
				<li class="capability-item">Security</li>
			</ul>
		</div>
		<div class="capability capability-developer-experience">
			<div class="capability-icon">🤝</div>
			<h3 class="capability-text">Developer Experience</h3>
			<ul class="capability-list">
				<li class="capability-item">Optimized Feedback Loops</li>
				<li class="capability-item">Reduced Cognitive Load</li>
				<li class="capability-item">Enhanced Flow State</li>
				<li class="capability-item">Improved Tooling and Processes</li>
			</ul>
		</div>
		<div class="capability capability-development">
			<div class="capability-icon">🧑‍💻️</div>
			<h3 class="capability-text">Development</h3>
			<ul class="capability-list">
				<li class="capability-item">Frontend</li>
				<li class="capability-item">Backend</li>
				<li class="capability-item">Automated Testing</li>
				<li class="capability-item">Mobile Development</li>
			</ul>
		</div>
	</div>
</section>

<style>
	.section-capabilities {
		padding: 8rem 0 8rem 0;
	}

	.capabilities {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 3.2rem;
		justify-items: center;
		align-items: center;
	}

	@media (max-width: 1205px) {
		.section-capabilities {
			padding: 3.2rem 0 3.2rem 0;
		}

		.capabilities {
			grid-template-columns: 0.2rem auto auto auto 0.2rem;
			row-gap: 6.4rem;
			justify-content: center;
		}

		.capability-systems-architecture {
			grid-column: 2 / 2;
		}

		.capability-developer-experience {
			grid-column: 4 / 5;
		}

		.capability-development {
			grid-column: 3 / 3;
		}
	}

	@media (max-width: 970px) {
		.section-capabilities {
			padding: 1.6rem 0 1.6rem 0;
		}

		.capabilities {
			grid-template-columns: repeat(1, auto);
			gap: 3.6rem;
			justify-content: center;
		}

		.capability-systems-architecture {
			grid-column: 1 / 1;
		}

		.capability-developer-experience {
			grid-column: 1 / 1;
		}

		.capability-development {
			grid-column: 1 / 1;
		}
	}

	.capability {
		display: flex;
		flex-direction: column;
		gap: 3.2rem;
		align-items: flex-start;
	}
	.capability-icon {
		font-size: 6.4rem;
		align-self: center;
	}

	.capability-text {
		align-self: center;
	}

	.capability-list {
		align-self: left;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		list-style-position: inside;
	}

	.capability-list > .capability-item::marker {
		/* Add a custom marker for list with space */
		content: '\2713  ';
	}
</style>
