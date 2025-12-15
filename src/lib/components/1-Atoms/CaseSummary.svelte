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

<style> 
section details {
  --details-border: 1px solid var(--link-color);
	border-top: var(--details-border);
	border-bottom: var(--details-border);
	border-left: none;
	border-right: none;
  padding: 1.5rem;

}
</style>