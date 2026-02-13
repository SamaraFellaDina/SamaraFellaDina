<script>
	import { Wrapper, Tags, Icons, List } from '$lib/index.js';

	export let subjects;
	export let products;
	export let tools;
</script>

<Wrapper>
	<section>
		<h2>I spend my days doing things like..</h2>
		<Tags animated="true" tags={subjects} />
	</section>

	<section>
		<h2>I love to create products like..</h2>
		<Tags animated="true" invertColor="true" tags={products} />
	</section>

		<section>
		<h2>Tools I am familiar with...</h2>
		<List>
			{#each tools as tool}
			{#if tools.length > 0}
			<li class='float'>

			<Icons width='80' height='80' icon={tool}/>

			</li>
		{/if}
		{/each}
		</List>

	</section>
</Wrapper>

<style>
	section {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
	}
</style>
