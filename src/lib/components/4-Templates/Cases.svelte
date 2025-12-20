<script>
  import { 
    CaseList, 
    Hero, 
    Wrapper 
  } from '$lib/index.js';
  export let caseData;
</script>

<Wrapper>
  <Hero heroTitle='Portfolio'/>
  <CaseList cases={caseData.cases} />
</Wrapper>

