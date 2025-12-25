<script>
  import { 
    Wrapper, 
    ContentGenerator 
  } from '$lib/index.js';
  export let assets;
</script>

<Wrapper fullwidth={true}>
<ul>
  {#each assets as asset}
  <li>
    <ContentGenerator asset={asset} />
  </li>

  {/each}
    </ul>
</Wrapper>
  


<style>

  ul { 
    padding-inline: 0;
    list-style: none;
    margin-block: 0;
    display: flex;
    flex-direction: column;
    gap: 10rem;
    padding: 10rem 0;
  }

  ul li {
    --default-space: 4rem;

    @media (min-width: 768px) {
      --default-space: -4rem;
    }
  }

  ul li:nth-child(odd) {
    padding-right: var(--default-space);

    @media (min-width: 768px) {
      margin-left: var(--default-space);
    }
  }

  ul li:nth-child(even) {
    padding-left: var(--default-space);

      @media (min-width: 768px) {
      margin-right: var(--default-space);
    }
  }
</style>

