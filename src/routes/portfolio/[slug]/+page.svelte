<script>
  export let data;

  const caseData = data.cases[0];
  console.log(caseData); 
</script>
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
  <p>{caseData.casecontent}</p>

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



