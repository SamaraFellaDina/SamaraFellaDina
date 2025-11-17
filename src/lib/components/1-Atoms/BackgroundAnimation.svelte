<!-- BackgroundAnimation.svelte -->
<div>
  <slot></slot>
</div>

<style>
  div {
    z-index: 0;
    background-color: yellow;
    background: yellow;
    height: 100vh;
    width: 100vw;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; 
    overflow: hidden;
  }
</style>