<script>
  import { 
    BackgroundAnimation, 
    HeaderNavigation 
  } from "$lib/index.js";
  import { onMount } from "svelte";

  onMount(async () => {
    const { gsap } = await import("gsap");
    const { SplitText } = await import("gsap/SplitText");

    gsap.registerPlugin(SplitText);

    const split = new SplitText(".logo", {
      type: "chars"
    });

    gsap.from(split.chars, {
      x: 1000,
      duration: 3,
      ease: "elastic.out(1,1)",
      autoAlpha: 0,
      stagger: {
        amount: 0.5,
        from: "random"
      }
    });
  });
</script>

<BackgroundAnimation>
  <HeaderNavigation variant='title'/>
  <section>
    <h1 class="logo">
      <span>Sammm.my</span>
    </h1>
  </section>
</BackgroundAnimation>


<style>
  section {
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    height: 100%;
  }

  h1 {
    font-size: 5rem;
    color: var(--color-dark);
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