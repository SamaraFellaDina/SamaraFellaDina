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
    color:var(--link-color);
    display:flex;
    flex-wrap:wrap;
    gap:1rem;
  }
  
  li {
    background-color: var(--link-color-active);
    border-radius:10em;    
    padding: .5rem 1rem;
    font-weight: 600;
    width: min-content;
    line-height: 1.3em;
    height: fit-content;
  }
</style>