<script>
	import { AboutMeHero, AboutSubjects, Career } from '$lib/index.js';
	export let content;
	let aboutMeData = content.aboutMe;
</script>

<AboutMeHero paragraph={aboutMeData.aboutMe} heroImages={aboutMeData.heroImages} />
<AboutSubjects subjects={aboutMeData.loveSubjects} products={aboutMeData.loveProducts} tools={aboutMeData.tools}/>
<Career careerContent={aboutMeData.stepsOfCareer} />
