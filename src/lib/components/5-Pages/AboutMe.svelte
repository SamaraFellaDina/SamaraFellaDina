<script>
	import { AboutMeHero, AboutSubjects, Career } from '$lib/index.js';
	export let content;
</script>

<AboutMeHero paragraph={content.aboutMe.aboutMe} heroImages={content.aboutMe.heroImages} />
<AboutSubjects subjects={content.aboutMe.loveSubjects} products={content.aboutMe.loveProducts} />
<Career />
