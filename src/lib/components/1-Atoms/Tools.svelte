<script>
  import { Icons } from '$lib/index.js'
  export let content;
</script>

<section>
  <h4>Tools</h4>
  <ul>
      {#each content as toolItem}
      <li>
        <Icons height="40" width="40" icon={toolItem} color="var(--color-light)" fallbackTag="true"/>
      </li>
      {/each}
    </ul>
</section>

<style>

  section {
    color: var(--color-light);
    border: var(--border-style-regular);
		border-left: none;
		border-right: none;
    margin: var(--padding-regular) 0;
    padding: var(--padding-small) 0;
  }

  section h4 {
    margin-block:0;
    padding: 0 var(--padding-small);
  }
  section ul {
    display: flex;
    gap: var(--gap-small);
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    padding: var(--padding-small);
    border-radius: var(--border-radius);
  }

  section ul li {
    display: flex;
    align-items: center;
}
</style>
