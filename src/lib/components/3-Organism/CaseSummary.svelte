<script>
	import { Summary, Wrapper } from '$lib/index.js';
	export let caseParagraphs;
</script>

<Wrapper>
	<div>
		{#each caseParagraphs as paragraph}
			<Summary summary={paragraph.subject} content={paragraph.context} />
		{/each}
	</div>
</Wrapper>

<style>
	div {
		padding: var(--padding-medium) 0;
	}
</style>
