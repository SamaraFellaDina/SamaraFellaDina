<script>
  import { 
    Tags, 
    Wrapper 
  } from '$lib/index.js'
  import { onMount } from 'svelte';
  import gsap from 'gsap'
  export let heroTitle ='input hero title here!';
  export let thumbnail;
  export let thumbnailHeight = 700;
  export let thumbnailWidth = 700;
  export let tags;
  export let showCase = false
  export let intro;


  onMount(() => {
    if (showCase === true) {

  gsap.to(".hero-showcase", {
    height: "auto",
    duration: 1,
    ease: "power3.inOut",
    delay: 0.3
  });    
}
  });

</script>

<Wrapper>
  <section class={showCase ? 'hero-showcase' : 'hero'}>
    <h1>{heroTitle}</h1>
    {#if Tags}
      <Tags tags={tags}/>
    {/if}
    {#if thumbnail}
        <img 
        alt="thumbnail" 
        src="{thumbnail}"
        height="{thumbnailHeight}"
        width="{thumbnailWidth}"
        />
    {/if}

    {#if intro}
    <p>{intro}</p>
    {/if}
  </section>
</Wrapper>

<style>
  .hero {
    display: flex;
    flex-direction:column;
    justify-content:flex-end;
    margin: 2rem 0;
    gap: var(--gap-regular);
  }
    img {
    height:fit-content;
    width:100%;
    object-fit:cover;
    max-height:50dvh
  }

    h1 {
    color: var(--color-primary);
    font-style:italic;
    letter-spacing: .2rem;
    text-transform:uppercase;
    font-size: 5rem;
    font-weight: var(--font-weight-bold);
    margin-block:0;
    line-height: 4.5rem;
    }

  .hero-showcase {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10rem;
  gap: var(--gap-regular);
  height: 80dvh; 
  overflow: hidden;
  }
</style>