<script>
  import { Wrapper } from '$lib/index.js';
  export let cases = [];
  const listOfCases = cases?.[0]?.listOfCases ?? [];
  const fallbackImage = "/images/fallback.jpg";
</script>

<Wrapper>
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
          </section>
        </a>
      </li>
    {/each}
  </ul>
</Wrapper>

<style>
ul {
  --gap-size: 1rem;
  list-style: none;
  margin-block: 0;
  padding-inline: 0;
  display: grid;
  position: relative;
  gap: var(--gap-size);

  @media (min-width: 1000px) {
    display: block;
    columns: 2;
  }
}

ul li {
  width: 100%;
  height: 100%;
  transition:var(--hover-transition);


  @media (min-width: 1000px) {
    break-inside: avoid;
    margin-bottom: var(--gap-size);
  }
}

ul li a {
  display: flex;  
  flex-direction:column;
  width:100%;
  height:100%;
  position: relative;
  }

ul li:hover {
  @media (min-width: 1000px) {
    &:nth-child(even) {
      transform:rotate(4deg);
    }
    &:nth-child(odd) {
    transform:rotate(-4deg);
    }

      & a section {
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
    @media (min-width: 1000px) {

      opacity: 0;
      padding: 2rem;
      transition:var(--hover-transition);

      display: flex; 
      align-items: flex-end;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      color: var(--link-color);
      background-color: var(--color-shadow);
    }
  }

    ul li a section h2 {
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 700;
    margin-block:0;
    text-style:capitalize;
  }

</style> 
