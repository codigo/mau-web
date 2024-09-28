<script lang="ts">
	import { onMount } from 'svelte';
	import { splitArrayIntoChunks, duplicateObjectsInArray } from '$lib/utils';
	import { TECH_STACK, CHUNKS, type TechStack } from '../constants/techStack';

	let techStackChunks = [[] as TechStack[]];
	let loading = true;

	let dataAnimatedScroller: boolean;
	onMount(() => {
		loading = false;
		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			dataAnimatedScroller = true;
			techStackChunks = duplicateObjectsInArray(splitArrayIntoChunks(TECH_STACK, CHUNKS));
		} else {
			techStackChunks = splitArrayIntoChunks(TECH_STACK, 4);
		}
	});
</script>

<section class="section-tech-stack b-border">
	{#if loading}
		<div class="loading" aria-busy={loading}>
			<span class="loader" />
		</div>
	{:else}
		<div class="pico tech-stack-box" data-animated={dataAnimatedScroller}>
			{#each techStackChunks as techStackChunk, idx}
				<!-- techStackChunk is an array of objects -->
				<ul
					class="pico tech-stack-box-inner"
					data-animated={dataAnimatedScroller}
					data-direction={idx % 2 === 0 ? 'left' : 'right'}
				>
					{#each techStackChunk as tech}
						<li
							title={tech.name}
							data-tooltip={tech.name}
							class="tech-stack-item"
							aria-hidden={!!tech.duplicate}
						>
							<svelte:component this={tech.icon} />
						</li>
					{/each}
				</ul>
			{/each}
		</div>
		<!--  end.tech-stack-box -->
	{/if}
</section>

<style lang="postcss">
	.section-tech-stack {
		padding: 8rem 0 12rem 0;
		margin-bottom: 2.4rem;
		overflow: hidden;
	}

	@media (max-width: 980px) {
		.section-tech-stack {
			padding: 4.8rem 0 4.8rem 0;
		}
	}

	.tech-stack-box {
		margin: 0 auto;
		display: grid;
		grid-auto-flow: rows;
		gap: 1rem;
	}

	.tech-stack-box-inner {
		display: grid;
		grid-auto-flow: column;
		gap: 1rem;
		justify-items: center;
		align-items: center;
	}

	.tech-stack-box[data-animated='true'] {
		display: unset;
		overflow: hidden;
		-webkit-mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
		mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
	}

	.tech-stack-box-inner[data-animated='true'] {
		display: flex;
		padding: 0.8rem;
		gap: 1.2rem;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.tech-stack-box .tech-stack-box-inner:first-child {
		padding-top: 4rem;
	}

	.tech-stack-box-inner[data-direction='left'] {
		--_animation-direction: forwards;
	}

	.tech-stack-box-inner[data-direction='right'] {
		--_animation-direction: reverse;
	}

	.tech-stack-box[data-animated='true'] .tech-stack-box-inner {
		flex-wrap: nowrap;
		animation: scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear
			infinite;
		width: fit-content;
	}

	.tech-stack-box[data-animated='true'] .tech-stack-box-inner:hover {
		animation-play-state: paused;
	}

	.tech-stack-item {
		display: flex;
		padding: 1.8rem;
		background-color: var(--theme-card-background-default);
		border-radius: 5px;

		& > svg {
			max-width: 6.2rem;
			min-width: 6.2rem;
			height: 6.2rem;
		}
	}

	.pico [data-tooltip] {
		border-bottom: none;
	}

	@keyframes scroll {
		to {
			transform: translate(calc(-50%));
		}
	}
</style>
