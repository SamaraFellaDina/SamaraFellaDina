<script>
  import { BackgroundAnimation, HeaderNavigation } from "$lib/index.js";
  import { onMount } from "svelte";

  onMount(async () => {
    const { gsap } = await import("gsap");
    const { ScrambleTextPlugin } = await import("gsap/ScrambleTextPlugin");

    gsap.registerPlugin(ScrambleTextPlugin)
    gsap.from(".logo", {
      scrambleText: "Sammmmm.my",
      duration:2,
      delay:2,
      onComplete: () => {
        gsap.to(".logo", {
        scrambleText: "sammm.my",

        })
      }}
    )}
  );
</script>

<BackgroundAnimation>
  <HeaderNavigation variant='title'/>
  <section >
    <h1 class="logo">
      sammm.my
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