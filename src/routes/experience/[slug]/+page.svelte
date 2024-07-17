<script lang="ts">
	import { marked } from 'marked';

	export let data;

	$: ({ content = '', title } = data);
</script>

<div class="markdown-wrapper">
	<h1>{title}</h1>
	{@html marked(content)}
</div>

<style>
	@import '$lib/assets/css/md-styles.css';
</style>
