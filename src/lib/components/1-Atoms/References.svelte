<script> 
  import { Wrapper } from '$lib/index.js';
  export let references;
</script>


<Wrapper backgroundColor="var(--link-color)">
    <section>
    <h2>references</h2>
    <ul>
    {#each references as reference}
      <li>
        <a href={reference.link}>{reference.titleOfHyperlink}</a>
      </li>
    {/each}
    </ul>
  </section>
</Wrapper>


  <style> 
    section, 
    a {
      color: var(--text-color-dark);
    }
  </style>