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
    width: 20dvw;
    display: flex;
    position: relative;
    
    @media (max-width: 500px) {
      display:none;
    }
  }

  nav {
    --header-border:solid .2rem #000;
    background-color: rgb(236, 236, 236);

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-end;
    width:100%;
    height: 100dvh;
    border-right: var(--header-border);
  }

  ul {
    list-style: none;
    margin:0;
    padding:0;
    display: grid;
    width:100%
}

li {
  border-top:var(--header-border);
  font-size: 1.2rem;
  align-items: center;
  display: flex;
}

a {
  background-color: unset;
  padding: 1rem;
  width: 100%;
  height: 100%;
}

</style>