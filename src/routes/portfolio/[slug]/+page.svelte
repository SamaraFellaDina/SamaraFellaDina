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
  <h2>About</h2>
  <p>{caseData.casecontent}</p>
</section>

