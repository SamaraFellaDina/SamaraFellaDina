<script>
	import { Icons, Hyperlink } from '$lib/index.js';
	export let sources;

	export let footer = false;
	export let socials = false;
	export let arrow = false;
</script>

<ul>
	{#each sources as reference}
		<li>
			<Hyperlink link={reference} {footer} {socials} {arrow} />
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding-inline: 0;
	}
</style>
