<script>
  import { 
    AboutMeHero,
    AboutSubjects,
    Skills
    } from '$lib/index.js'
    export let content;
</script>

  <AboutMeHero paragraph={content.aboutMe.aboutMe}/> 
  <AboutSubjects 
    subjects={content.aboutMe.loveSubjects}
    products={content.aboutMe.loveProducts}
  /> 
  <Skills skills={content.aboutMe}/>


