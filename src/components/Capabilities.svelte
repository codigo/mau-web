<script>

	const capabilities = [
		{
			icon: '📐',
			title: 'Systems Architecture',
			items: [
				{ location: 'right', text: 'Scalability', tooltip: 'Ensuring systems can handle increased load without performance degradation.' },
				{ location: 'right', text: 'Performance', tooltip: 'Optimizing system performance to meet user expectations.' },
				{ location: 'right', text: 'Reliability', tooltip: 'Ensuring systems remain reliable and available during normal operations.' },
				{ location: 'right', text: 'Security', tooltip: 'Protecting systems from unauthorized access and attacks.' },
			]
		},
		{
			icon: '🤝',
			title: 'Developer Experience',
			items: [
				{ location: 'right', text: 'Optimized Feedback Loops', tooltip: 'Optimizing feedback loops to improve developer productivity.' },
				{ location: 'right', text: 'Reduced Cognitive Load', tooltip: 'Reducing cognitive load to enhance developer efficiency.' },
				{ location: 'right', text: 'Enhanced Flow State', tooltip: 'Enhancing flow state to improve developer productivity.' },
				{ location: 'right', text: 'Improved Tooling and Processes', tooltip: 'Improving tooling and processes to streamline development workflows.' },
			]
		},
		{
			icon: '🧑‍💻️',
			title: 'Development',
			items: [
				{ location: 'left', text: 'Frontend', tooltip: 'Building the front-end of web applications.' },
				{ location: 'left', text: 'Backend', tooltip: 'Building the back-end of web applications.' },
				{ location: 'left', text: 'Automated Testing', tooltip: 'Automating testing processes to ensure code quality and reliability.' },
				{ location: 'left', text: 'Mobile Development', tooltip: 'Developing mobile applications for iOS and Android platforms.' },
			]
		},
		{
			icon: '🤖',
			title: 'AI Integration',
			items: [
				{ location: 'left', text: 'LangChain Development', tooltip: 'Creating custom chains and agents for specific use cases.' },
				{ location: 'left', text: 'RAG', tooltip: 'Using AI to extract information from unstructured data.' },
				{ location: 'left', text: 'AI Consulting & Strategy', tooltip: 'Providing expert advice and guidance on AI strategy and implementation.' },
				{ location: 'left', text: 'LLM Integration & Deployment', tooltip: 'Integrating and deploying LLMs into existing systems.' },
			]
		}
	]

</script>

<section class="section-capabilities b-border">
	<div class="pico capabilities">
		{#each capabilities as capability}
			<div class="capability capability-{capability.title.toLowerCase().replace(/\s+/g, '-')}">
				<div class="capability-icon">{capability.icon}</div>
				<h3 class="capability-text">{capability.title}</h3>
				<ul class="capability-list">
					{#each capability.items as item}
						<li class="capability-item" data-placement={item.location} data-tooltip={item.tooltip}>{item.text}</li>
					{/each}
				</ul>
			</div>
		{/each}
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
			grid-template-columns: auto auto auto auto;
			gap: 6.4rem;
			justify-content: center;
		}

		.capability-systems-architecture {
			grid-column: 2 / 2;
		}

		.capability-developer-experience {
			grid-column: 3 / 3;
		}

		.capability-development {
			grid-column: 2 / 2;
		}

		.capability-ai {
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

		.capability-ai {
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
		display: flex;
		flex-direction: column;
		gap: 1rem;
		list-style-position: inside;
	}

	.capability-list > .capability-item::marker {
		/* Add a custom marker for list with space */
		content: '\2713  ';
	}

	[data-tooltip]:hover::before {
		text-wrap: pretty;
		min-width: 22rem;
	}

	.pico [data-tooltip] {
		border-bottom: none;
	}
</style>
