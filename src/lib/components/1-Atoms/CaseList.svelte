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

<style>
  ul {
    list-style:none;
    margin-block:0;
    padding-inline:0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  a {
    display: block;  
    width: 100%;
    height: 100%;
    position: relative;
  }

  a::before {
    content:"";
    position:absolute;
    background-color: var(--link-color-active) ;
    z-index:-1;
  }

  a::after{
    content:"";
    position:absolute;
    background-color: var(--text-color-dark) ;
    opacity:60%;
    z-index:1;
  }

  a:hover::after {
    width:100%
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

</style>
