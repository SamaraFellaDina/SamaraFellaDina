<script>
  import { Wrapper } from '$lib/index.js';
  export let assets;
</script>


<Wrapper>
  {#each assets as asset}
    {#if asset.mimeType.startsWith('image/')}
      <img 
        src={asset.url} 
        alt={asset.fileName} 
        width={asset.width} 
        height={asset.height}
      />
    {/if}

    {#if asset.mimeType.startsWith('video/')}
    <video
      autoplay
      muted
      preload="metadata"
      playsinline
      loop
    >
      <source src={asset.url} type="video/mp4" />
    </video>
    {/if}
  {/each}
</Wrapper>


<style>
  img, video {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
</style>