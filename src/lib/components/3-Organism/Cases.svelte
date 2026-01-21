<script>
	import { CaseList, Hero, Hyperlinks, Wrapper } from '$lib/index.js';
	export let caseData;
	console.log(caseData.cases[0].workingProjects)
</script>

<Hero heroTitle="Portfolio" />
<CaseList cases={caseData.cases} />

<Hyperlinks sources={caseData.cases[0].workingProjects} 
heading='Current working projects'
backgroundColor="var(--color-secondary)"
arrow
/>

