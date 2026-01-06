<script>
  import { Tag } from '$lib/index.js';
  export let tags; 
</script>

<ul>
  {#each tags as tagItem}
  <Tag content={tagItem}/>
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
    gap: var(--gap-regular);
  }
</style>