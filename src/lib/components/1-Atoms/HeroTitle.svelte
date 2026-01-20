<script>
	export let heroTitle = 'input hero title here!';
	export let aboutMe = false;
</script>

<h1 class:about-me={aboutMe}>
	{heroTitle}
</h1>

<style>
	h1 {
		color: var(--color-primary);
		letter-spacing: 0.2rem;
		font-size: 3rem;
		font-weight: var(--font-weight-bold);
		margin-block: 0;
		line-height: 2.5rem;

		@media (min-width: 500px) {
			font-size: 5rem;
			line-height: 4.5rem;
		}
	}

	.about-me {
		text-align: center;
	}
</style>
