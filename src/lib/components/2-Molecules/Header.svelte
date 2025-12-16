<script>
  import { HeaderNavigation } from "$lib/index.js";
  export let variant = "default";
</script>

<header
  class="{variant}">
  <a class='logo' href='/'>SamaraFellaDina.</a>
    <HeaderNavigation variant={variant}/>
</header>

<style>

.default {
  width: 100%;
  height: 5dvh;
  background-color: var(--text-color-dark);
  padding:0;
  margin:0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 1em;


  & .logo {
    color: var(--text-color-light);

    &::before {
    background-color: transparent;
    }
  }
}

</style>


