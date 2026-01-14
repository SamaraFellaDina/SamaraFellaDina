<script>
  import { 
    Summary, 
    Wrapper 
  } from '$lib/index.js';
  export let caseParagraphs;
  export let caseSummary = 'Case Summary';
</script>

<Wrapper>
  <div>
  <Summary 
  summary='Summary'
  content={caseSummary}
  />
  {#each caseParagraphs as paragraph}
    <Summary 
    summary={paragraph.subject} 
    content={paragraph.context}
    /> 
  {/each}
  </div>
</Wrapper>

<style>
  div {
    padding: var(--padding-medium) 0;
  }
</style>
