<script>
	import { Tags, Wrapper, HeroTitle, Paragraph } from '$lib/index.js';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	export let heroTitle;
	export let tags;
	export let showCase = false;
	export let intro;
	export let aboutMe;
	export let fullWidth = false;

	onMount(() => {
		if (showCase === true) {
			gsap.to('.showcase', {
				height: 'auto',
				duration: 1,
				ease: 'power3.inOut',
				delay: 0.3
			});
		}
	});
</script>

<Wrapper>
	<section class:showcase={showCase}>
		<HeroTitle {heroTitle} {aboutMe} />
		{#if Tags}
			<Tags {tags} />
		{/if}

		{#if intro}
			<Paragraph {fullWidth} content={intro} />
		{/if}
	</section>
</Wrapper>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		margin: 2rem 0;
	}

	.showcase {
		justify-content: center;
		margin-top: 10rem;
		height: 80dvh;
		overflow: hidden;
		gap: var(--gap-small);
	}
</style>
