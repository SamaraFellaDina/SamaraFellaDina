<script>
	import { Tag } from '$lib/index.js';
	export let tags;
	export let invertColor;
	export let animated;
</script>

<ul>
	{#each tags as tagItem (tagItem)}
		{#if tagItem}
			<Tag {animated} {invertColor} content={tagItem} />
		{/if}
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-wrap: wrap;
		gap: var(--gap-regular);
	}
</style>
