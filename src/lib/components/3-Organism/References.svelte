<script> 
  import { 
    Wrapper, 
    Icons 
  } from '$lib/index.js';
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
          <Icons 
          icon="arrow-right" 
          width="40"
          height="40"
          />

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

    section ul li a {
      display: flex;
      align-items: center;
      transition:  var(--hover-transition);
      gap: .1rem;
      width: fit-content;
      text-decoration: none;
    }

    section ul li a:hover {
      gap: .5rem;
      background-color: var(--link-color-active);
      color: var(--link-color);
      padding: .2rem .4rem;
    }

    section ul li a,
    section h2 {
      color:var(--link-color-active)
    }
  </style>