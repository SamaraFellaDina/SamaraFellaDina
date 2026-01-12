<script> 
  import { 
    Wrapper, 
    Hyperlinks
  } from '$lib/index.js';
  export let sources;
</script>


<Wrapper backgroundColor="var(--color-primary)">
    <section>
    <h2>Sources</h2>
    <Hyperlinks arrow='true' sources={sources}/>
  </section>
</Wrapper>


  <style> 
    section {
      color: var(--color-dark);
    }
    section h2 {
      color:var(--color-secondary)
    }
  </style>