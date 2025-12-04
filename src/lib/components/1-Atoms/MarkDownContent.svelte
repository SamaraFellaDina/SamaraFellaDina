<script>
  import { marked } from 'marked';
  export let content;
  export let references
  console.log(references)

</script>

<div class="markdown">
  {@html marked(content)}


  {#if references}
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

    & p,
    li
    a {
    color:red;
    }
  }
</style>