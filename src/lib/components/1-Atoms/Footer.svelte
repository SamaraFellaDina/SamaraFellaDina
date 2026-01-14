<script>
  import { 
    Wrapper,
    Icons,
    Hyperlinks
  } from '$lib/index.js'

  export let footerData;
  let email = "samarafelladina@gmail.com"
</script>

<Wrapper backgroundColor='var(--color-secondary)'>
<section>
  <h2>See you soon!</h2>
  <a href="mailto:{email}">{email}</a>
</section>

{#if footerData.socialsList}
  <section>
    <h2>Socials</h2>
    <Hyperlinks 
    footer="true"
    socials="true"
    sources={footerData.socialsList}
    />
  </section>
{/if}

{#if footerData.githubLinks}
  <section>
    <h2>Github</h2>
      <Hyperlinks 
    footer="true"
    sources={footerData.githubLinks}
    />
  </section>
{/if}
</Wrapper>


<style>
  section {
    color: var(--color-primary);
  }
</style>