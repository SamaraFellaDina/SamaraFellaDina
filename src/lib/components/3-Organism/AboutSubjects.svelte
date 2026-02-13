<script>
	import { Wrapper, Tags } from '$lib/index.js';

	export let subjects;
	export let products;
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
		<!-- put icons of tools over here -->
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
