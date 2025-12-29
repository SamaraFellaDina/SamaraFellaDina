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
        <section>
          <h2>{caseItem.caseTitle}</h2>
          <p>{caseItem.summary}</p>
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
  width:100%;
  height:100%;
  transition:var(--hover-transition);
  position: relative;

      @media (min-width: 500px) {
      & section {
        opacity: 0;

      }
    }
  }

ul li a:hover {
  @media (min-width: 500px) {
      transform: scale(1.02);

      & section {
        opacity: 1;
    }
  }
}

  ul li a img {
    width: inherit;
    height: inherit;
    object-fit: cover;
    border-radius: var(--border-radius);
  }

  ul li a section {
    display:none;
    @media (min-width: 500px) {
      display:block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      color: var(--color-light);
      background-color: var(--color-dark);
    }
  }

</style> 
