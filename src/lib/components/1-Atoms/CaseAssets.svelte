<script>
  import { Wrapper } from '$lib/index.js';
  export let assets;
</script>


  <ul>


  {#each assets as asset}
  <li>
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
  </li>

  {/each}
    </ul>



<style>

  ul { 
    padding-inline: 0;
    list-style: none;
    margin-block: 0;
    display: flex;
    flex-direction: column;
    gap: 10rem;
  }

  ul li {
    --default-space: 4rem;
  }

  ul li:nth-child(odd) {
    padding-right: var(--default-space);

    & img, 
    video {
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
    }
  }

  ul li:nth-child(even) {
    padding-left: var(--default-space);
    & img, 
    video {
      border-radius: var(--border-radius) 0 0 var(--border-radius);
    }
  }

  ul li img, 
  ul li video {
    width: 100%;
    height: auto;
    max-height:80dvh;
    object-fit: cover;
    border-radius: 0;

  }
</style>

