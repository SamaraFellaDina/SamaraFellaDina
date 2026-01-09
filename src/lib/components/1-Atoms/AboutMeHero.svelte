<script>
  import { 
    Wrapper,
    Hero,
    HeroTitle,
    AboutMeHeroImage,
    Paragraph
  } from '$lib/index.js'
export let paragraph = 'no paragraph available'
export let heroImages;
</script>

<Wrapper>
  <HeroTitle heroTitle="Hi! I'm Sammy" aboutMe='true'/>
</Wrapper>

<Wrapper>
  <AboutMeHeroImage heroImages={heroImages} />
</Wrapper>

  <Paragraph content={paragraph}/>
  

