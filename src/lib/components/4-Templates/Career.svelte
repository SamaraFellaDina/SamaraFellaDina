<script>
	import { Wrapper, Tag, Paragraph, Tools } from '$lib/index.js';
	const fallbackImage = '/images/fallback.jpg';
	export let careerContent;
</script>

<Wrapper>
	<h2>My Career path</h2>
  <ul>
    {#each careerContent as careerItem}
    <li>
      <div class='scroll-grow'>
          <img src={careerItem.subjectImage?.url || fallbackImage} alt="career">
      </div>
        <section>
          <Tag content={careerItem.dateOfStep || "Put date here"}/>
          <h3>{careerItem.titleOfStep}</h3>
          <Paragraph fullWidth=true content={careerItem.content}/>
					{#if careerItem.tools.length > 0}
					<Tools content={careerItem.tools}/>
					{/if}
        </section>
    </li>
    {/each}
  </ul>
	<p>You've reached the end🎉</p>
</Wrapper>

<style>
	h2 {
		text-align: center;
    margin-block: 7rem;
		font-size: 3rem;
	}
	
  ul {
		display: grid;
		gap: 15rem;
	}
	ul li {
		display: grid;
		height: auto;

		@media (min-width: 700px) {
			grid-template-columns: 1fr 1fr;
			gap: var(--gap-medium);
		}
	}

	ul li div {
		height: auto;
	}
	ul li div img {
		aspect-ratio: 1/1;

		@media (min-width: 700px) {
			aspect-ratio: 1/1.3;
			position: -webkit-sticky;
			position: sticky;
			top: calc(50vh - 30%);
		}
	}

	ul li section h3 {
    margin-block-start: 1rem;
  }

	p {
		text-align: center;
		font-size:var(--text-regular-size-l);
		font-family:var(--font-family-heading);
		color:var(--color-tertriary);
		padding: var(--padding-medium) 0;
	}
</style>
