<script>
  import { MarkDownContent } from '$lib/index.js';
  export let summary;
</script>

  <section>
    {#each summary as paragraph}
    <details>
      <summary>{paragraph.subject}</summary>
      <MarkDownContent content={paragraph.context} />
    </details>
      
    {/each}
  </section>