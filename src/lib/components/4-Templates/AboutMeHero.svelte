<script>
	import { Wrapper, Hero, AboutMeHeroImage, Paragraph } from '$lib/index.js';
	export let paragraph = 'no paragraph available';
	export let heroImages;
</script>

<Wrapper>
	<Hero heroTitle="Hi! I'm Sammy" aboutMe="true" />
</Wrapper>

<Wrapper>
	<AboutMeHeroImage {heroImages} />
</Wrapper>

<Paragraph content={paragraph} />
