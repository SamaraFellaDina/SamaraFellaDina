<script>
  export let cases = [];
  const listOfCases = cases?.[0]?.listOfCases ?? [];
  const fallbackImage = "/images/fallback.jpg"
</script>

<ul>
  {#each listOfCases as caseItem}
    <li>
      <a href="/portfolio/{caseItem.slug}">
        <img 
        src="{caseItem.thumbnail?.url || fallbackImage}"
        alt="thumbnail"
        width="{caseItem.thumbnail?.width}"
        height="{caseItem.thumbnail?.height}"
        />
        <h2>{caseItem.caseTitle}</h2>
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
  flex-direction:column;
  text-align: center;
  width:100%;
  height:100%;
  transition:var(--transition)
  }

ul li a:hover {
  transform: scale(1.1) rotate(3deg);
  text-decoration:none;
}

  ul li a img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }

  ul li a h2 {
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
