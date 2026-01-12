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

<section>
  <h2>Socials</h2>
  <Hyperlinks 
  footer="true"
  socials="true"
  references={footerData.socialsList}/>
</section>

<section>
  <h2>Github</h2>
  <ul>
    <li>
      <a href='/'>Bug report</a>
    </li>
        <li>
      <a href='/'>Repository</a>
    </li>
        <li>
      <a href='/'>Help this site improve :D</a>
    </li>
  </ul>
</section>
</Wrapper>


<style>
  section {
    color: var(--color-tertriary);
  }
</style>