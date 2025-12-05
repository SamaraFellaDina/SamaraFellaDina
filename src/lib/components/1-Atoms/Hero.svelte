<script>
  import { Tag } from '$lib/index.js'
  export let heroTitle ='input hero title here!';
  export let thumbnail;
  export let thumbnailHeight = 700;
  export let thumbnailWidth = 700;
  export let tags;

</script>

<div class="hero">
{#if thumbnail}
<div class="shadow">
  <img 
  alt="thumbnail" 
  src="{thumbnail}"
  height="{thumbnailHeight}"
  width="{thumbnailWidth}"
  />

</div>
{/if}
<h1>{heroTitle}</h1>
  {#if Tag}
  <Tag tags={tags}/>
  {/if}

</div>

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

  .shadow {
    position: relative;
  }
  .shadow::after {
    content: "";
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 15px 20px var(--text-color-dark);
  }
    img {
    height:fit-content;
    width:100%;
    object-fit:cover;
  }
</style>