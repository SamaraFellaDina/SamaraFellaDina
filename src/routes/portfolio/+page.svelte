<script>
  import { CaseList, Hero, Wrapper } from '$lib/index.js';
  export let data
</script>

<Wrapper>
  <Hero heroTitle='Portfolio'/>
  <CaseList cases={data.cases} />
</Wrapper>

