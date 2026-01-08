<script>
  import { 
    AboutMeHero,
    AboutSubjects,
    Skills
    } from '$lib/index.js'

    export let content;
</script>

  <AboutMeHero paragraph={content.aboutMe.aboutMe}/> 
  <AboutSubjects /> 
  <Skills skills={content.aboutMe}/>


