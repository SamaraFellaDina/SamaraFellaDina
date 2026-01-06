<script>
  import { Wrapper } from '$lib/index.js'
  export let skills;
</script>


  <div>
    {#each skills.skills as skillSection}
      <section>
        <h2>{skillSection.sectionHeading}</h2>
        <ul>
          {#each skillSection.listOfSkills as skillItem}
            <li>
            <label for="progress-bar"> {skillItem.titleOfSkill}
              <progress id="progress-bar" max="100" value={skillItem.experience}>{skillItem.experience}%</progress>
            </label>
            
            </li>
          {/each}
        </ul>
      </section>
    {/each}
  </div>



<style>

  div {
    display: grid;
    justify-content: center;
    justify-items: center;


    @media (min-width:900px) {
      grid-template-columns: 1fr 1fr;
    }
  }
  section {
    padding: var(--padding-small) 0;


  }

  section h2 {
    margin-block-start: 0;
  }
  
  section ul {
    display: block;
    list-style-type: none;
    margin-block:0;
    padding-inline:0;
    unicode-bidi: isolate;
  }

  section ul li label {
    display:flex;
    align-items:center;
    gap:var(--gap-regular);
    justify-content: space-between;
    width:100%;
    max-width:350px;
  }

progress {
  inline-size: 10em;
  block-size: 1em;
  appearance: none;
  border-radius: 999px;
  background-color: var(--color-dark);
}

progress::-webkit-progress-bar {
  background-color: var(--color-dark);
  border-radius: 999px;
}

progress::-webkit-progress-value {
  background-color: var(--color-primary);
  border-radius: 999px;
}

progress::-moz-progress-bar {
  background-color: var(--color-primary);
  border-radius: 999px;
}
</style>