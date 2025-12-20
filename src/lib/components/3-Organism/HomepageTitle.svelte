<script>
  import { 
    BackgroundAnimation, 
    HeaderNavigation 
  } from "$lib/index.js";

  import { gsap } from "gsap";
  import { SplitText } from "gsap/SplitText";
  import { onMount } from "svelte";

  gsap.registerPlugin(SplitText); 

  onMount(() => {
    let split = SplitText.create(".logo", {
      type: "chars",
    });


    gsap.from(split.chars, {
      x:1000,
      duration: 3,
      stagger: 0.2,
      opacity: 0,
      ease: "elastic.out(1,1)",
      stagger : {
        amount: 0.5,
        from: "random",
      },
    })
  });


</script>

<BackgroundAnimation>
  <HeaderNavigation variant='title'/>
  <section>
    <h1 class="logo">
      <span>Samara</span>
      <span>Fella</span>
      <span>Dina.</span>
    </h1>
    <p>hi! Welcome to my portfolio</p>
  </section>
</BackgroundAnimation>


<style>
  section {
    z-index: 1;
    display: grid;
    justify-content: center;
    align-items: end;
    width: 80vw;
    height: 100%;
  }

  h1 {
    font-size: 5rem;
    color: #000;
    text-transform: uppercase;

    display: flex;
    flex-direction: column;


    @media (min-width: 500px) {
      font-size: 5rem;
    } 

    @media (min-width: 1024px) {
      font-size: 10rem;
    }
  }
</style>