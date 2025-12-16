<script>
  import { Tag, Wrapper } from '$lib/index.js'
  export let heroTitle ='input hero title here!';
  export let thumbnail;
  export let thumbnailHeight = 700;
  export let thumbnailWidth = 700;
  export let tags;

</script>

<Wrapper>
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

</Wrapper>

<style>
  .hero {
    display: flex;
    flex-direction:column;
    justify-content:flex-end;
    margin: 2rem 0;
    gap:1rem;

    & h1 {
    color: var(--link-color);
    font-style:italic;
    letter-spacing: .2rem;
    text-transform:uppercase;
    font-size: 5rem;
    font-weight: 900;
    margin-block:0;
    line-height: 4.5rem;
    }
  }
    img {
    height:fit-content;
    width:100%;
    object-fit:cover;
  }
</style>