<script>
  export let variant = "default";
</script>

<nav class="{variant}">
  <ul>
    <li><a href="/">contact</a></li>
    <li><a href="/">my work</a></li>
    <li><a href="/">about me</a></li>
  </ul>
</nav>


<style>
  .default ul {
    list-style: none;
    z-index: 2;
  }

  .title {
    color: red;

    & ul {
    list-style: none;
    z-index: 2;
    }
  }
</style>