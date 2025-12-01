<div class="wrapper">
  <div class="wrapper-content">
    <slot />
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    padding: 0 4rem;
  }

  .wrapper-content {
    max-width: 900px;
    width: 100%;
  }
</style>