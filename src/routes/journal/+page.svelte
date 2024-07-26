<script lang="ts">
	import { type ListResult } from 'pocketbase';
	import { type Post } from '$lib/types';
	export let data: ListResult<Post> & { status: number };

	import Posts from './Posts.svelte';

	$: ({ page, perPage, items, totalItems, totalPages } = data);
</script>

<h2>Journal</h2>

<Posts posts={data.items} />
