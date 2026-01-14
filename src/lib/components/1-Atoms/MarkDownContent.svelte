<script>
	import { marked } from 'marked';
	export let content;
</script>

{#if content === null || content === undefined}
	<p>No content available.</p>
{:else}
	<div class="markdown">
		{@html marked(content)}
	</div>
{/if}

<style>
	:global(.markdown) {
		& img {
			width: 100%;
			height: auto;
			margin-block: calc(var(--margin-block) * 3);
			border-radius: var(--border-radius);
		}
	}
</style>
