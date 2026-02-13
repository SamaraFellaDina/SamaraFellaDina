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
		animation: 
			float 5s ease-in-out infinite;
		@media (min-width:700px) {
			font-size:1.5rem;
		}
	}

.float:nth-of-type(3n+1) {
  animation-delay: -1s;
}

.float:nth-of-type(3n+2) {
  animation-delay: -2s;
}

.float:nth-of-type(3n+3) {
  animation-delay: -3s;
}

	/* Floating animation */
	@keyframes float {
		0% { transform: translateY(0) translateX(5px); }
		50% { transform: translateY(-10px) translateX(-2px); }
		100% { transform: translateY(0) translateX(5px); }
	}
</style>
