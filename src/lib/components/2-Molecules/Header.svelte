<script>
  import { HeaderNavigation } from "$lib/index.js";
  export let variant = "default";

  let x = Math.random() * 200 - 100; 
  let y = Math.random() * 200 - 100;
</script>

<header
  class="{variant}"
  style="{variant === 'title'
    ? 'position: absolute; top: 50%; left: 50%; transform: translate(' + x + 'px, ' + y + 'px);'
    : ''}"
>
  <a class='logo' href='/'>SamaraFellaDina.</a>
    <HeaderNavigation />
  
</header>

<style>

.default {
  width: 100%;
  height: 3em;
  background-color: var(--text-color-dark);
  padding:0;
  margin:0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 20px;


  & .logo {
    color: var(--text-color-light);

    &::before {
    background-color: transparent;
    }
  }
}

.title {
  z-index: 3;
  font-size: 2rem;
}
</style>