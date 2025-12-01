<script>
  export let cases = [];
  const listOfCases = cases?.[0]?.listOfCases ?? [];
  const fallbackImage = "https://preview.redd.it/random-question-but-does-anyone-have-versions-of-this-cat-v0-ya8qikz9kn0f1.png?auto=webp&s=c2fdba9a3904ab3bec9e7367e380f66343c2929a"

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
        src="{caseItem.thumbnail?.url || fallbackImage}"
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

  img {
    width: 100%;
    height: 15rem;
    object-fit: cover;
  }

</style>
