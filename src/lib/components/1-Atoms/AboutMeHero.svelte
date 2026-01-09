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
let placeholder = "https://plus.unsplash.com/premium_photo-1746637466037-001842a48d31?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
</script>

<Wrapper>
  <HeroTitle heroTitle="Hi! I'm Sammy" aboutMe='true'/>
</Wrapper>

<Wrapper>
  <AboutMeHeroImage heroImages={heroImages} />
</Wrapper>

  <Paragraph content={paragraph}/>
  
<Wrapper>
    <ul>
      <li> <img src={placeholder}></li>
      <li> <img src={placeholder}></li>
    </ul>
</Wrapper>


    <style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

  @media(min-width:700px) {
    display: flex;
    flex-direction: row;
    gap: var(--gap-regular);
    align-items:center;
  }
}

 ul li {
  width: 100%;
  height: 100%;
  overflow: hidden;   
  aspect-ratio:1/1;
}

ul li:nth-child(2) {
  display:none;

  @media(min-width:700px) {
    display:block;
  }
}

 ul li img {
  width: 100%;
  height: 100%;
}
    </style>
