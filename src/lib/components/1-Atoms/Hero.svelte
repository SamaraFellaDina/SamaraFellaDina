<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap'
  import { Tag, Wrapper } from '$lib/index.js'
  export let heroTitle ='input hero title here!';
  export let thumbnail;
  export let thumbnailHeight = 700;
  export let thumbnailWidth = 700;
  export let tags;
  export let showCase = false


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

  {#if showCase === true}
      <div class="hero-showcase">
      <h1>{heroTitle}</h1>
      {#if Tag}
      <Tag tags={tags}/>
      {/if}
      {#if thumbnail}
        <img 
        alt="thumbnail" 
        src="{thumbnail}"
        height="{thumbnailHeight}"
        width="{thumbnailWidth}"
        />
      {/if}
      </div>

  {:else}
      <div class="hero">
      <h1>{heroTitle}</h1>
      {#if Tag}
      <Tag tags={tags}/>
      {/if}
      {#if thumbnail}
        <img 
        alt="thumbnail" 
        src="{thumbnail}"
        height="{thumbnailHeight}"
        width="{thumbnailWidth}"
        />
      {/if}
      </div>
  {/if}



</Wrapper>

<style>
  .hero {
    display: flex;
    flex-direction:column;
    justify-content:flex-end;
    margin: 2rem 0;
    gap:1rem;
  }
    img {
    height:fit-content;
    width:100%;
    object-fit:cover;
  }

    h1 {
    color: var(--link-color);
    font-style:italic;
    letter-spacing: .2rem;
    text-transform:uppercase;
    font-size: 5rem;
    font-weight: 900;
    margin-block:0;
    line-height: 4.5rem;
    }

  .hero-showcase {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10rem;
  gap: 1rem;
  height: 80dvh; 
  overflow: hidden;
  }
</style>