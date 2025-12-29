<script>
  export let tags; 
</script>

<ul>
  {#each tags as tagItem}
  <li>
    {tagItem}
  </li>
  {/each}
</ul>

<style> 
  ul {
    list-style: none;
    margin-block:0;
    padding-inline:0;
    color:var(--color-primary);
    display:flex;
    flex-wrap:wrap;
    gap:1rem;
  }
  
  li {
    background-color: var(--color-secondary);
    border-radius: 10em;    
    padding: .5rem 1rem;
    font-weight: var(--font-weight-medium);
    width: auto;
    height: fit-content;
    line-height: 1.3em;
  }
</style>