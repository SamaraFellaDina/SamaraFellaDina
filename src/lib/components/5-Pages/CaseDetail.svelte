<script>
  import { 
    Hero, 
    CaseAssets,
    CaseSummary,
    References 
  } from '$lib/index.js';
  export let caseData;

</script>

  <Hero 
  heroTitle={caseData.caseTitle} 
  thumbnail={caseData.thumbnail?.url}
  thumbnailHeight={caseData.thumbnail?.height}
  thumbnailWidth={caseData.thumbnail?.width}
  tags={caseData.tags}
  showCase={true}
  />

  <CaseAssets assets={caseData.allAssets} />

  <CaseSummary 
  caseSummary={caseData.summary}
  caseParagraphs={caseData.paragraphs} 
  />

  {#if caseData.sources.length > 0}
    <References sources={caseData.sources}/>
  {/if}

