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
    width: 20vw;
    display: flex;
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
</style>