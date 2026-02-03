<script>
	import { Wrapper, Hyperlinks } from '$lib/index.js';
	export let sources;
</script>

<Wrapper backgroundColor="var(--color-secondary)">
	<section>
		<h2>Sources</h2>
		<Hyperlinks arrow="true" {sources} />
	</section>
</Wrapper>

<style>
	section {
		color: var(--color-dark);
		display: flex;
		height: 100%;
		min-height: 300px;
		flex-direction: column;
		justify-content: center;
	}
	section h2 {
		color: var(--color-primary);
	}
</style>
