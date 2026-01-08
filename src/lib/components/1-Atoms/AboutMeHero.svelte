<script>
  import { 
    Wrapper,
    Hero,
    HeroTitle,
    AboutMeHeroImage,
    Paragraph
  } from '$lib/index.js'
export let paragraph = 'no paragraph available'
</script>

<Wrapper>
  <HeroTitle heroTitle="Hi! I'm Sammy" aboutMe='true'/>
</Wrapper>

<Wrapper>
  <AboutMeHeroImage />
</Wrapper>

<Wrapper paragraph='true'>
  <Paragraph content={paragraph}/>
</Wrapper>
  

