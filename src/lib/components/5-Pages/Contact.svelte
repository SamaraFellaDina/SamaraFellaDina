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
  <div>
    <img alt='gif' src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eDhxbDd0eXY5dXkxbTZiYmx3eHhkaGNtdmpiYXBsZXhpZDl5bnZibyZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/7NoNw4pMNTvgc/giphy.gif">
    <Hyperlink 
    link=mailto:{email} 
    title="{email}"
    arrow="true"
    />
  </div>

  </section>
</Wrapper>


<style>
  section {
    min-height:100dvh;
  }

  section div {
    display: flex;
    gap: var(--gap-medium);
    flex-direction:column;
    align-items: center;
    justify-content: center;
    min-height:60dvh;


    @media (min-width:700px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
    }
  }

  section div img {
      display:block;
      max-height:400px;
      max-width:400px;
  }
</style>