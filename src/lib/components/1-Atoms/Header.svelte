<script>
  export let variant = "default";

  let x = Math.random() * 200 - 100; 
  let y = Math.random() * 200 - 100;
</script>

<nav
  class="{variant}"
  style="{variant === 'title'
    ? 'position: absolute; top: 50%; left: 50%; transform: translate(' + x + 'px, ' + y + 'px);'
    : ''}"
>
  <ul>
    <li><a href="/contact">contact</a></li>
    <li><a href="/portfolio">my work</a></li>
    <li><a href="/about-me">about me</a></li>
  </ul>
</nav>

<style>
.default ul,
.title ul {
  list-style: none;
  z-index: 2;
}
.title {
  z-index: 3;
  font-size: 2rem;
}
</style>