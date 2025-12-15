<script>
  export let backgroundColor = 'var(--wrapper-background-color)';
</script>
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
    padding: 4rem;
    background-color: var(--wrapper-background-color);
  }

  .wrapper-content {
    max-width: 900px;
    width: 100%;
  }
</style>