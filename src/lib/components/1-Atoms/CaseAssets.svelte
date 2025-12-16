<script>
  export let assets;
  console.log(assets);
</script>

{#each assets as asset}
  <img src={asset.url} alt="Case Asset" width="600" />
{/each}