<script>
  import { marked } from 'marked';
  export let content;
  export let references
  console.log(references)

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
      margin-block:var(--margin-block);
    }
  }
</style>