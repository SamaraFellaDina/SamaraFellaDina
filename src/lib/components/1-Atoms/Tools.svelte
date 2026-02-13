<script>
  import { Icons, List } from '$lib/index.js'
  export let content;
</script>

<section>
  <h4>Tools</h4>
  <List>
      {#each content as toolItem}
      <li>
        <Icons height="40" width="40" icon={toolItem} fallbackTag="true"/>
      </li>
      {/each}
    </List>
</section>

<style>

  section {
    color: var(--color-light);
  }
</style>
