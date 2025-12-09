<script>
  import { MarkDownContent } from '$lib/index.js';
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
        <section>
          <h2>{caseItem.caseTitle}</h2>
          <MarkDownContent content={caseItem.summary} />
        </section>
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
  flex-direction: column;
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


  ul li a img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius: var(--border-radius);
  }

  ul li a section {
    display:none;
  }

</style> 
