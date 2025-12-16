<script>
  import { 
    MarkDownContent, 
    Wrapper, 
    Hero, 
    Tag, 
    CaseSummary,
    References 
  } from '$lib/index.js';
  export let data;

  const caseData = data.cases[0];
  console.log(caseData.references);

</script>
  <Hero 
  heroTitle={caseData.caseTitle} 
  thumbnail={caseData.thumbnail?.url}
  thumbnailHeight={caseData.thumbnail?.height}
  thumbnailWidth={caseData.thumbnail?.width}
  tags={caseData.tags}
  />

  



  <CaseSummary 
  caseSummary={caseData.summary}
  caseParagraphs={caseData.paragraphs} 
  />


  {#if caseData.references.length > 0}
    <References references={caseData.references}/>
  {/if}



