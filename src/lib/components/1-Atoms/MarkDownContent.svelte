<script>
  import { marked } from 'marked';
  export let content;
  export let references
  (references)

</script>

<div class="markdown">
  {@html marked(content)}


  {#if references.length}
    <h2>References</h2>
    <ul>
      {#each references as reference}
        <li>
          <a href={reference.link}>
            {reference.titleOfHyperlink}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</div>


<style> 


  :global(.markdown) {

    & img {
      width:100%;
      height:auto;
      margin-block:calc(var(--margin-block)*3);
      border-radius:var(--border-radius);
    }
  }
</style>