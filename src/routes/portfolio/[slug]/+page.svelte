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
  />
  <Tag tags={caseData.tags}/>

  <section>
    <h2>About this project</h2>

    <MarkDownContent content={caseData.casecontent} />

    {#if caseData.references.length}
      <h2>References</h2>
      <ul>

        {#each caseData.references as reference}
          <li>
            <a href="{reference.link}">
              {reference.titleOfHyperlink}
            </a>
          </li>
        {/each}

      </ul>
    {/if}
  </section>

</Wrapper>