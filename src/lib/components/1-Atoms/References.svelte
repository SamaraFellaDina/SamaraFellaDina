<script> 
  import { Wrapper, Icons } from '$lib/index.js';
  export let references;
</script>


<Wrapper backgroundColor="var(--link-color)">
    <section>
    <h2>references</h2>
    <ul>
    {#each references as reference}
      <li>
        <a href={reference.link}>
          {reference.titleOfHyperlink}
          <Icons icon="arrow-right" />

        </a>
      </li>
    {/each}
    </ul>
  </section>
</Wrapper>


  <style> 
    section, 
    li,
    a {
      color: var(--text-color-dark);
    }

    section ul {
      list-style: none;
      padding-inline:0
    }

    section ul li a,
    section h2 {
      color:var(--link-color-active)
    }
  </style>