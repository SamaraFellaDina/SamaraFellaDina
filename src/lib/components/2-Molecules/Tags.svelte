<script>
  import { Tag } from '$lib/index.js';
  export let tags; 
  export let invertColor = false;
</script>

<ul class:invert={invertColor}>
  {#each tags as tagItem}
  <Tag invertColor={invertColor} content={tagItem}/>
  {/each}
</ul>

<style> 
  ul {
    list-style: none;
    margin-block:0;
    padding-inline:0;
    display:flex;
    flex-wrap:wrap;
    gap: var(--gap-regular);
  }

</style>