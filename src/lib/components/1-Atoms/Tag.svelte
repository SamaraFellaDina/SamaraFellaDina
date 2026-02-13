<script>
	export let content;
	export let animated = false;
	export let invertColor = false;
</script>

{#if content.length > 0}
	<li class="
	{animated ? 'float' : ''}
	{invertColor ? 'inverted-color' : ''}
	">
		{content}
	</li>
{/if}

<style>
	li {
		color: var(--color-primary);
		background-color: var(--color-secondary);
		border-radius: 10em;
		padding: 0.5rem 1rem;
		font-weight: var(--font-weight-normal);
		width: fit-content;
		height: fit-content;
		line-height: 1.3em;
	}

	.inverted-color {
		background-color: var(--color-primary);
		color: var(--color-secondary);
	}

	.float {
		@media (min-width:700px) {
			font-size:1.5rem;
		}
	}
</style>
