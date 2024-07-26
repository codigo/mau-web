<script lang="ts">
	import type { Post } from '$lib/types';
	export let posts: Post[];
</script>

<ul>
	{#each posts as post}
		<li>{post.title}</li>
		<li>{post.summary}</li>
		<li>{post.slug}</li>
	{/each}
</ul>
