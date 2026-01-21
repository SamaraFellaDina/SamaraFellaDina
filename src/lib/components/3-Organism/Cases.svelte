<script>
	import { CaseList, Hero, Hyperlinks, Wrapper } from '$lib/index.js';
	export let caseData;
</script>

<Hero heroTitle="Portfolio" />
<CaseList cases={caseData.cases} />

<Hyperlinks sources={caseData.cases[0].workingProjects} 
heading='Current working projects'
backgroundColor="var(--color-secondary)"
arrow
/>

