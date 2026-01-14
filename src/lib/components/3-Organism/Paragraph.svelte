<script>
	import { MarkDownContent, Wrapper } from '$lib/index.js';
	export let markdown = 'false';
	export let content = 'no content available';
</script>

<Wrapper paragraph="true">
	{#if (markdown = true)}
		<MarkDownContent {content} />
	{:else}
		<slot></slot>
	{/if}
</Wrapper>
