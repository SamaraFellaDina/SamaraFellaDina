
<header class='clicked'>
  <nav>
    <h2>menu</h2>
    <ul>
      <li><a href="/">Home.</a></li>
      <li><a href="/about">About.</a></li>
      <li><a href="/work">Work.</a></li>
      <li><a href="/contact">Contact.</a></li>
      <li><a href='/'>Close.</a></li>
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
    z-index: 1000;
  }

  nav {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: .5rem;
}

ul {
    --header-size: 5rem;
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

h2 {
  margin:0;
  background-color: var(--link-color);
}

.clicked {
  align-items: center;
  padding: 0;
}
.clicked nav {
  justify-content: center;
}
.clicked ul {
  --header-size: 100vw;
  justify-content: space-between;
  padding: 3rem;
}
.clicked li {
  visibility: visible;
  font-size: 1.5rem;
  transition: var(--hover-transition);

  &:hover {
    transform: scale(1.1);
  }
}

</style>