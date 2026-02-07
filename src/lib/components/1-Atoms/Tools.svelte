<script>
  import { Icons } from '$lib/index.js'
  export let content;
  console.log(content)
</script>

<section>
  <h4>Tools</h4>
  <ul>
      {#each content as toolItem}
      <li>
        <Icons icon={toolItem} />
      </li>
      {/each}
    </ul>
</section>

<style>
  ul {
    list-style: none;
    margin-block: 0;
    padding-inline: 0;
    display: flex;
    gap: var(--gap-regular);
    flex-wrap: wrap;
  }

  ul li {
    display: flex;
    align-content: center;
    gap: var(--gap-small);
}
</style>
