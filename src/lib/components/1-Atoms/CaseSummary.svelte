<script>
  import { Summary } from '$lib/index.js';
  export let caseParagraphs;
  export let caseSummary = 'Case Summary';
</script>

  <section>
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

    </section>
