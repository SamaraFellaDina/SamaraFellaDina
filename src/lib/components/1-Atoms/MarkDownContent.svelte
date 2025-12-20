<script>
  import { marked } from 'marked';
  export let content;


</script>

<div class="markdown">
  {@html marked(content)}
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