<script>
  export let cases = [];
  const listOfCases = cases?.[0]?.listOfCases ?? [];

</script>

<ul>
  {#each listOfCases as caseItem}
  {console.log(caseItem)}
    <li>
      <a href="/portfolio/{caseItem.slug}">
        <h2>{caseItem.caseTitle}</h2>
        <p>{caseItem.date}</p>
        <p>{caseItem.location}</p>

        <img 
        src="{caseItem.thumbnail?.url}"
        alt="thumbnail"
        width="{caseItem.thumbnail?.width}"
        height="{caseItem.thumbnail?.height}"
        />

      </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style:none;
    margin-block:0;
    padding-inline:0;
  }
</style>
