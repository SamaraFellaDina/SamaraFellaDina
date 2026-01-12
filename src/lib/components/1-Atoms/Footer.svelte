<script>
  import { 
    Wrapper,
    Icons,
    Hyperlinks
  } from '$lib/index.js'

  export let footerData;
</script>

<Wrapper backgroundColor='var(--color-secondary)'>
<section>
  <h2>Contact</h2>
  <p>lets meet! :)</p>
</section>

{#if footerData.socialsList}
  <section>
    <h2>Socials</h2>
    <Hyperlinks 
    footer="true"
    socials="true"
    references={footerData.socialsList}
    />
  </section>
{/if}

{#if footerData.githubLinks}
  <section>
    <h2>Github</h2>
      <Hyperlinks 
    footer="true"
    references={footerData.githubLinks}
    />
  </section>
{/if}
</Wrapper>


<style>
  section {
    color: var(--color-tertriary);
  }
</style>