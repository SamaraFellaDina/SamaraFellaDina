<script>
  import { 
    HeroTitle,
    Wrapper,
    Hyperlink
  } from '$lib/index.js';
  let email = "samarafelladina@gmail.com"
</script>

<Wrapper>
  <section>
  <HeroTitle heroTitle="Speak to you soon!" />
  <img alt='gif' src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eDhxbDd0eXY5dXkxbTZiYmx3eHhkaGNtdmpiYXBsZXhpZDl5bnZibyZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/7NoNw4pMNTvgc/giphy.gif">
  <Hyperlink 
  link=mailto:{email} 
  title="{email}"
  />
  </section>
</Wrapper>


<style>
  section {
    min-height:100dvh;
  }
</style>