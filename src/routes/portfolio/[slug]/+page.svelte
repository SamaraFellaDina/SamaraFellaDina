<script>
  import { MarkDownContent, Wrapper, Hero, Tag } from '$lib/index.js';
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

  <section>
    {#each caseData.paragraphs as paragraph}
    <details>
      <summary>{paragraph.subject}</summary>
      <MarkDownContent content={paragraph.context} />
    </details>
      
    {/each}
  </section>



</Wrapper>