<script>
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
  <nav>
    <ul>
      <li><a href="/contact">contact</a></li>
      <li><a href="/portfolio">my work</a></li>
      <li><a href="/about-me">about me</a></li>
    </ul>
  </nav>

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

  & nav {
    height: 100%;
  }

  & nav ul {
    display: flex;
    justify-content: flex-end;
    height: 100%

  }

  & nav ul li {
    height: 100%;
  }

  & nav ul li a {
  display: flex;        /* or block */
  align-items: center;  /* centers text vertically */
  height: 100%;
  padding: 0 1rem;
  }
}

.default ul,
.title ul {
  list-style: none;
  z-index: 2;
  margin-block:0;
  padding-inline:0;
}
.title {
  z-index: 3;
  font-size: 2rem;
}
</style>