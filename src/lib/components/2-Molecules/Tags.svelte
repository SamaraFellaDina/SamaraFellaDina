<script>
	import { Tag, List } from '$lib/index.js';
	export let tags;
	export let invertColor;
	export let animated;
</script>

<List>
	{#each tags as tagItem (tagItem)}
		{#if tagItem}
			<Tag {animated} {invertColor} content={tagItem} />
		{/if}
	{/each}
</List>
