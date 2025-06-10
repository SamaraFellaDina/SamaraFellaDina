
<header>
  <nav>
    <h2>menu</h2>
    <ul>
      <li><a href="/">Home.</a></li>
      <li><a href="/about">About.</a></li>
      <li><a href="/work">Work.</a></li>
      <li><a href="/contact">Contact.</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    position: fixed;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    padding: 1rem;
    justify-content: center;
    align-items: flex-end;
  }

  nav {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}

ul {
  --header-size: 10rem;
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  mix-blend-mode: difference;
  background-color: white;
  border-radius: 1000em;
  width: var(--header-size);
  height: var(--header-size);
  
}

li {
  visibility: hidden;
}

</style>