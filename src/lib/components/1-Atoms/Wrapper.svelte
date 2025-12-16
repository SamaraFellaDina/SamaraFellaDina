<script>
  export let backgroundColor = 'var(--wrapper-background-color)';
  export let fullwidth = false;
</script>

{#if fullwidth === true}
<div 
  class="wrapper-fullwidth"
  style="background-color: {backgroundColor};"
>
  <div class="wrapper-content">
    <slot />
  </div>
</div>
{/if}

<div 
  class="wrapper"
  style="background-color: {backgroundColor};"
>
  <div class="wrapper-content">
    <slot />
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    padding: 2rem 4rem;
    background-color: var(--wrapper-background-color);
  }

  .wrapper .wrapper-content {
    max-width: 900px;
    width: 100%;
  }

  .wrapper-fullwidth {
    display: flex;
    justify-content: center;
    background-color: var(--wrapper-background-color);

    @media (min-width: 768px) {
    padding: 2rem 4rem;
    }
  }
    .wrapper-fullwidth .wrapper-content {
    width: 100%;

    @media (min-width: 768px) {
    max-width: 900px;
  }
  }
</style>