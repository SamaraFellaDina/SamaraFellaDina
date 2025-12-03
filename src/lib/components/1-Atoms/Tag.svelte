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
    gap:.8rem;
  }
  
  li {
    border: .2em solid var(--link-color);
    border-radius:1rem;
    padding: .5rem .8rem;
  }
</style>