<script>
  import { 
    AboutMeHero,
    AboutSubjects,
    Skills
    } from '$lib/index.js'

    export let content;
</script>

<ul>
  <li>
    <AboutMeHero /> 
  </li>
  <li>
    <AboutSubjects /> 
  </li>
  <li>
    <Skills skills={content.aboutMe}/>
  </li>
</ul>

<style>
  ul {     
    position: relative;
    width: 100%;
    height: 100vh;
    scroll-behavior: smooth;
    overflow: auto;
    scroll-snap-type: y mandatory;
  }
  li {
    width: 100%;
    height: 100vh;
    background-size:  cover;
    scroll-snap-align: start;
  }
</style>

