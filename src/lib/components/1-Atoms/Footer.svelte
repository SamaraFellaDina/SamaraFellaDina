<script>
  import { 
    Wrapper,
    Icons,
    Hyperlinks,
    Hyperlink
  } from '$lib/index.js'

  export let footerData;
  let email = "samarafelladina@gmail.com"
</script>

<Wrapper backgroundColor='var(--color-primary)'>
  <div>
    <section>
  <h2>See you soon!</h2>
  <Hyperlink 
  link="mailto:{email}"
  footer="true"
  title={email}
  />
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
  </div>

</Wrapper>


<style>
  div {

    @media(min-width:700px){
    display: flex;
    gap: var(--gap-regular);
    justify-content: space-between;
    align-items: flex-start;
    }
  }
  div section {
    color: var(--color-secondary);
    padding:var(--padding-small) 0;
  }

  div section h2 {
    margin-block: .5rem;
  }
</style>