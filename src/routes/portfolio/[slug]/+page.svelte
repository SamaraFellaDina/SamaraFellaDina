<script>
  import { MarkDownContent } from '$lib/index.js';
  export let data;

  const caseData = data.cases[0];
</script>

<div class="wrapper">
  <div class="wrapper-content">

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

  </div>
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    padding: 0 4rem;
  }

  .wrapper-content {
    max-width: 900px;
    width: 100%;
  }
</style>





