<script>
  import { Wrapper } from '$lib/index.js';
  export let assets;
  console.log(assets);
</script>


<Wrapper>
  {#each assets as asset}
    {#if asset.mimeType.startsWith('image/')}
      <img src={asset.url} alt={asset.fileName} width="600" />
    {/if}
  {/each}
</Wrapper>
