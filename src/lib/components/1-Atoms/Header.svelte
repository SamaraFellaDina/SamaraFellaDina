<script>
  let clicked = false;
</script>
<!-- on:click={() => clicked = !clicked -->
<header class:clicked={clicked}>
  <nav>
      <input type="checkbox" id="check">
      <label for="check" class="checkbtn">
        <p>Menu.</p>
      </label>
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
  --header-size: 3rem;
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  background-color: black;
  mix-blend-mode: difference;
  border-radius: 1000em;
  width: var(--header-size);
  height: var(--header-size);
  transition: var(--transition);
}

li {
  visibility: hidden;
  opacity: 0;
  transition-delay: 300ms;
}
label {
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: bold;
}

input {
  display: none;
}

input:checked ~ ul {
  --header-size: 100vw;
  justify-content: space-between;
  padding: 3rem;
}

input:checked ~ ul li {
  visibility: visible;
  font-size: 1.5rem;
  opacity: 1
}





/* 
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
} */

</style>