<script>
  export let variant = "default";

  // random offsets around center
  let x = Math.random() * 200 - 100; // -100 to +100px
  let y = Math.random() * 200 - 100;
</script>

<nav
  class="{variant}"
  style="position: absolute; top: 50%; left: 50%; transform: translate({x}px, {y}px);"
>
  <ul>
    <li><a href="/">contact</a></li>
    <li><a href="/">my work</a></li>
    <li><a href="/">about me</a></li>
  </ul>
</nav>

<style>
.default ul,
.title ul {
  list-style: none;
  z-index: 2;
}
.title {
  color: red;
}
</style>