<section class="section-capabilities b-border">
	<div class="capabilities">
		<div class="capability">
			<div class="capability-icon">📐</div>
			<h3 class="capability-text">Systems Architecture</h3>
			<ul class="capability-list">
				<li class="capability-item">Scalability</li>
				<li class="capability-item">Performance</li>
				<li class="capability-item">Reliability</li>
				<li class="capability-item">Security</li>
			</ul>
		</div>
		<div class="capability">
			<div class="capability-icon">🤝</div>
			<h3 class="capability-text">Developer Experience</h3>
			<ul class="capability-list">
				<li class="capability-item">Optimized Feedback Loops</li>
				<li class="capability-item">Reduced Cognitive Load</li>
				<li class="capability-item">Enhanced Flow State</li>
				<li class="capability-item">Improved Tooling and Processes</li>
			</ul>
		</div>
		<div class="capability">
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
		grid-template-columns: repeat(3, 1fr);
		justify-items: center;
		align-items: center;
		column-gap: 3.2rem;
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
