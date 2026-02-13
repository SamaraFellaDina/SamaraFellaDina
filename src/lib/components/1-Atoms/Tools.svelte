<script>
  import { Icons } from '$lib/index.js'
  export let content;
</script>

<section>
  <h4>Tools</h4>
  <ul>
      {#each content as toolItem}
      <li>
        <Icons height="40" width="40" icon={toolItem} color="var(--color-dark)"/>
      </li>
      {/each}
    </ul>
</section>

<style>

  section {
    background: var(--color-secondary);
    color: var(--color-primary);
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
  }

  section h4 {
    margin-block:0;
    padding: 0 var(--padding-small);
  }
  section ul {
    list-style: none;
    margin-block: 0;
    padding-inline: 0;
    color:var(--color-dark);
    display: flex;
    gap: var(--gap-small);
    flex-wrap: wrap;
    background:var(--color-light);
    width: 100%;
    height: 100%;
    padding: var(--padding-small);
    border-radius: var(--border-radius);

    @media (min-width:700px) {
      justify-content: flex-end;
    }
  }

  section ul li {
    display: flex;
    align-items: center;
}
</style>
