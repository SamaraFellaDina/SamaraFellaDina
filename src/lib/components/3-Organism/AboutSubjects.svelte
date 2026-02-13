<script>
	import { Wrapper, Tags } from '$lib/index.js';

	export let subjects;
	export let products;
</script>

<Wrapper>
	<section>
		<h2>Love doing things like:</h2>
		<Tags tags={subjects} />
	</section>

	<section>
		<h2>Love creating things like:</h2>
		<Tags invertColor="true" tags={products} />
	</section>
</Wrapper>

<style>
	section {
    height: 100dvh;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
	}
</style>
