<script>
  export let backgroundColor = 'var(--wrapper-background-color)';
  export let fullwidth = false;
</script>

  <div 
    class={fullwidth ? 'wrapper-fullwidth' : 'wrapper'}
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
    padding: 2rem;
    background-color: var(--wrapper-background-color);

    @media (min-width: 700px) {
      padding: 2rem 4rem;
    }
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