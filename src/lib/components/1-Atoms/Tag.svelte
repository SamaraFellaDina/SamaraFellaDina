<script>
	export let tags;
</script>

<ul>
	{#each tags as tagItem}
		<li>
			{tagItem}
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		margin-block: 0;
		padding-inline: 0;
		color: var(--color-primary);
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	li {
		border: 0.2em solid var(--color-primary);
		border-radius: var(--border-radius);
		padding: 0.5rem 0.8rem;
	}
</style>
