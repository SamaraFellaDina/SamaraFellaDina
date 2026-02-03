<script>
  import { Wrapper, Tag, Paragraph } from '$lib/index.js'
  export let Image = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1280px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
  export let careerContent;
  console.log(careerContent)
</script>

<Wrapper>
  <ul>
    {#each careerContent as careerItem}
    <li>
      <img src={careerItem.subjectImage || Image} alt="career">
        <section>
          <Tag content={careerItem.dateOfStep}/>
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
    gap: var(--gap-medium);
  }
  ul li {
    display: grid;
    gap: var(--gap-medium);

    @media (min-width:700px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  ul li img {
    aspect-ratio: 1/1.3;
  }

  ul li section h2 {
    margin-block-start: 1rem;
  }
</style>