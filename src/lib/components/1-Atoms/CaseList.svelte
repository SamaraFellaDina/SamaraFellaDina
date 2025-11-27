<script>
  export let cases = [];
  const listOfCases = cases?.[0]?.listOfCases ?? [];

</script>

<ul>
  {#each listOfCases as caseItem}
    <li>
      <a href='/portfolio/{caseItem.slug}'>
        <h2>{caseItem.caseTitle}</h2>
        <p>{caseItem.date}</p>
        <p>{caseItem.location}</p>
      </a>
    </li>
  {/each}
</ul>
