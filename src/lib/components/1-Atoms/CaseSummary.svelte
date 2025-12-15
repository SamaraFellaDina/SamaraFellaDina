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
	border-left: none;
	border-right: none;
  padding: 1.5rem;

  &:last-child {
    border-bottom: var(--details-border);
  }

  &:not([open]) {
    cursor:pointer;
  }
}

section details summary {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  list-style: none;
  transition: var(--transition);
  font-size: 2rem;
}
[open] summary {
  padding: 1em 0em;
}

</style>