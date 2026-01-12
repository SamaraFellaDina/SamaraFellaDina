<script> 
  import { 
    Wrapper, 
    Hyperlinks
  } from '$lib/index.js';
  export let references;
</script>


<Wrapper backgroundColor="var(--color-primary)">
    <section>
    <h2>Sources</h2>
    <Hyperlinks arrow='true' references={references}/>
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