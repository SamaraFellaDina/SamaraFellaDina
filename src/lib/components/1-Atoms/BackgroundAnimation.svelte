<script>
  // folling video: https://www.youtube.com/watch?v=L1afzNAhI40
  // import gsap
  import { gsap } from "gsap";
  import { SplitText } from "gsap/SplitText";
  import { onMount } from "svelte";

    // import plugin from gsap
  gsap.registerPlugin(SplitText);

  onMount(() => {
    // This will split the text into lines
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

<div>
  <section>
    <h1 class="logo">
      <span>Samara</span>
      <span>Fella</span>
      <span>Dina.</span>
    </h1>
    <p>hi! Welcome to my portfolio</p>
  </section>
</div>

<style>

  div {
    background-color: yellow;
    height: 100vh;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  section {
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