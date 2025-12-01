<script>
  import { MarkDownContent, Wrapper } from '$lib/index.js';
  export let data;

  const caseData = data.cases[0];
</script>

<Wrapper>

  <a href="/portfolio">
    go back
  </a>

  <h1>{caseData.caseTitle}</h1>
  <ul>
    {#each caseData.tags as tag}
      <li>{tag}</li>
    {/each}
  </ul>
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