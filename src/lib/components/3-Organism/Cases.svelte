<script>
	import { CaseList, Hero, Hyperlinks, Wrapper } from '$lib/index.js';
	export let caseData;
	console.log(caseData.cases[0].workingProjects)
</script>

<Hero heroTitle="Portfolio" />
<CaseList cases={caseData.cases} />

<Wrapper>
	<h2>Current Projects</h2>
	<Hyperlinks sources={caseData.cases[0].workingProjects} workingProjects arrow />
</Wrapper>

