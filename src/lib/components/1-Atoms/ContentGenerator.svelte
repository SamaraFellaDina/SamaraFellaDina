<script>
  export let asset;
</script>

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