<script lang="ts">
	import { type ListResult } from 'pocketbase';
	import { type Post } from '$lib/types';
	export let data: ListResult<Post>;

	import Posts from './Posts.svelte';
	import Pagination from './Pagination.svelte';

	$: ({ page, totalPages } = data);
</script>

<Posts posts={data.items} />
<Pagination currentPage={page} {totalPages} />
