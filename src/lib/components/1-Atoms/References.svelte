<script> 
  export let references;
</script>


  <section>
    <h2>references</h2>
    <ul>
    {#each references as reference}
      <li>
        <a href={reference.link}>{reference.titleOfHyperlink}</a>
      </li>
    {/each}
    </ul>
  </section>
