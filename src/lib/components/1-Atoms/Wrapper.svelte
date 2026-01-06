<script>
  export let backgroundColor = 'var(--wrapper-background-color)';
  export let fullwidth = false;
  export let slides = false;
</script>

  <div 
    class= "wrapper
        {fullwidth ? ' wrapper-fullwidth' : ''}
        {slides ? ' wrapper-slides' : ''}"
    style="background-color: {backgroundColor};"
  >
    <div class="wrapper-content">
      <slot />
    </div>
  </div>

<style>

  .wrapper {
    padding: 2rem;
    display: flex;
    justify-content: center;
    background-color: var(--wrapper-background-color);

    @media (min-width: 700px) {
      padding: var(--padding-containter);
    }
  }

  .wrapper-content {
    width:100%;
    max-width: 900px;
  }

  .wrapper-fullwidth {
    padding: 0;

    @media (min-width: 700px) {
    padding: var(--padding-containter);
    }
  }

  .wrapper-slides {
    height: 100dvh;
    max-height:100dvh;

    & .wrapper-content {
      display:grid;
      align-items:center;
    }
  }
</style>