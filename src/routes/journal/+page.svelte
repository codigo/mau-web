<script lang="ts">
	import { type ListResult } from 'pocketbase';
	import { type Post } from '$lib/types';
	export let data: ListResult<Post>;

	import Posts from './Posts.svelte';

	$: ({ page, perPage, items, totalItems, totalPages } = data);
</script>

<Posts posts={data.items} />
