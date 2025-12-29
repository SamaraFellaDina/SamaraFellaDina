<script>
  import { MarkDownContent } from '$lib/index.js';
  export let summary = 'no title';
  export let content = 'no content';
</script>

<details>
  <summary>{summary}</summary>
  <MarkDownContent content={content} />
</details>
      

<style> 
 details {
  --details-border: 1px solid var(--color-primary);
	border-top: var(--details-border);
	border-left: none;
	border-right: none;
  padding: var(--padding-regular);

  &:last-child {
    border-bottom: var(--details-border);
  }

  &:not([open]) {
    cursor:pointer;
  }
}

 details summary {
  --font-size: 1.5rem;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  list-style: none;
  transition: var(--transition);
  font-size: var(--font-size);
}
[open] summary {
  padding: 1em 0em;
  font-size: calc(var(--font-size) + 0.5rem);
}

</style>