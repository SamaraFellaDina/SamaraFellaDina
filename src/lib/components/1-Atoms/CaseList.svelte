<script>
  export let cases = [];
  const listOfCases = cases?.[0]?.listOfCases ?? [];
  const fallbackImage = "https://preview.redd.it/random-question-but-does-anyone-have-versions-of-this-cat-v0-ya8qikz9kn0f1.png?auto=webp&s=c2fdba9a3904ab3bec9e7367e380f66343c2929a"
</script>

<ul>
  {#each listOfCases as caseItem}
    <li>
      <a href="/portfolio/{caseItem.slug}">
        <h2>{caseItem.caseTitle}</h2>
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
  list-style: none;
  margin-block: 0;
  padding-inline: 0;
  display:flex;
  gap: 2rem;
  position: relative;
}

ul li {
  width: 100%;
  height: 100%;


}
ul li a {
  display: flex;  
  text-align: center;
  width:100%;
  height:100%;
  }

  ul li a img {
    position: relative;
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius:var(--border-radius);
  }

  ul li a h2 {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index:1;
    margin: 0;
    color:white;
    padding: .5rem 1rem;
    background: black;
    width: 100%;
    text-align: left;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
    font-size:1.3rem;
  }

</style> 
