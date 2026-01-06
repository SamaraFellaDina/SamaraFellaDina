<script>
  import { 
    AboutMeHero,
    AboutSubjects,
    Skills
    } from '$lib/index.js'

    export let content;
</script>

  <AboutMeHero /> 
  <AboutSubjects /> 
  <Skills skills={content.aboutMe}/>


