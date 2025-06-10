
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
  position: relative;
  }
nav {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column-reverse;
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
  
  background-color: black;
  border-radius: 1000em;
  width: var(--header-size);
  height: var(--header-size);
}

</style>