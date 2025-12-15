<script>
  import { MarkDownContent, Wrapper, Hero, Tag, CaseSummary } from '$lib/index.js';
  export let data;

  const caseData = data.cases[0];

</script>

<Wrapper>

  <a href="/portfolio">
    go back
  </a>
  <Hero 
  heroTitle={caseData.caseTitle} 
  thumbnail={caseData.thumbnail?.url}
  thumbnailHeight={caseData.thumbnail?.height}
  thumbnailWidth={caseData.thumbnail?.width}
  tags={caseData.tags}
  />

  <CaseSummary summary={caseData.paragraphs} />


</Wrapper>