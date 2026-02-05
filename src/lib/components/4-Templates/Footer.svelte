<script>
	import { Wrapper, Icons, Hyperlinks, Hyperlink } from '$lib/index.js';

	export let footerData;
	console.log(footerData.footerLinks);
</script>

<Wrapper backgroundColor="var(--color-primary)">
	<div>
		{#each footerData.footerLinks as footerItem}
			<section>
				<h2>{footerItem.headingOfSection}</h2>
				<Hyperlinks footer="true" sources={footerItem.listOfHyperlinks} />
			</section>
		{/each}
	</div>
</Wrapper>

<style>
	div {
		@media (min-width: 900px) {
			display: flex;
			gap: var(--gap-regular);
			justify-content: space-between;
			align-items: flex-start;
		}
	}
	div section {
		color: var(--color-secondary);
		padding: var(--padding-small) 0;
	}

	div section h2 {
		margin-block: 0.5rem;
	}
</style>
