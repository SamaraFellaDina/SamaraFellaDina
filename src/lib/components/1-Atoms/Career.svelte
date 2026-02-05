<script>
  import { Wrapper, Tag, Paragraph } from '$lib/index.js'
  export let Image = "https://eu-west-2.graphassets.com/cmd7kpx9c0ne40dlah8rbbmbf/cml9lo9et2kln07lf61ucako4"
  export let careerContent;
</script>

<Wrapper>
  <ul>
    {#each careerContent as careerItem}
    <li>
      <div>
          <img src={careerItem.subjectImage?.url || Image} alt="career">
      </div>
        <section>
          <Tag content={careerItem.dateOfStep || "Put date here"}/>
          <h2>{careerItem.titleOfStep}</h2>
          <Paragraph fullWidth=true content={careerItem.content}/>
        </section>
    </li>
    {/each}
  </ul>
</Wrapper>



<style>
  ul {
    padding-inline: 0;
		list-style: none;
		margin-block: 0;
    
    padding-block-end:5rem;

    display:grid;
    gap: 15rem;
  }
  ul li {
    display: grid;
    height:auto;

    @media (min-width:700px) {
      grid-template-columns: 1fr 1fr;
      gap: var(--gap-medium);
    }
  }

  ul li div {
    height: auto;
  }
  ul li div img {
  aspect-ratio: 1/1;

    @media (min-width:700px) {
    aspect-ratio: 1/1.3;
    position: -webkit-sticky;
    position: sticky;
    top: calc(50vh - 30%);
    }
  }

  ul li section h2 {
    margin-block-start: 1rem;
  }
</style>