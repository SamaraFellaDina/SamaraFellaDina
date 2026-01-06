<script>
    import { Icons} from '$lib/index.js';
  export let references;
</script>

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

<style>
  
    li,
    a {
      color: var(--color-dark);
    }

  ul {
      list-style: none;
      padding-inline:0
    }

  ul li a {
      display: flex;
      align-items: center;
      transition:  var(--hover-transition);
      gap: .1rem;
      width: fit-content;
      text-decoration: none;
    }

  ul li a:hover {
      gap: .5rem;
      background-color: var(--color-secondary);
      color: var(--color-primary);
      padding: .2rem .4rem;
    }

  ul li a,
  h2 {
      color:var(--color-secondary)
    }
</style>