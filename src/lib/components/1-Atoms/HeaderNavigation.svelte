  <script>
    export let variant;

    let x = Math.random() * 200 - 100; 
    let y = Math.random() * 200 - 100;
  </script>
  
  <nav class="{variant}"
    style="{variant === 'title'
    ? 'position: absolute; top: 50%; left: 50%; transform: translate(' + x + 'px, ' + y + 'px);'
    : ''}"
    >
    <ul>
      <li><a href="/contact">contact</a></li>
      <li><a href="/portfolio">portfolio</a></li>
      <li><a href="/about-me">about me</a></li>
    </ul>
  </nav>


  <style>
  nav {
    z-index:2;
  }

  nav ul {
  list-style: none;
  z-index: 2;
  margin-block:0;
  padding-inline:0;
}

nav ul li {
  height:100%;
}

nav ul li a {
  color :var(--color-dark);
  background-color: var(--color-primary);
  display: flex;
  width:fit-content;

  &:hover {
    background-color: var(--color-secondary); 
    color: var(--color-tertriary);
  }
}

.default{
  height:100%;

  & ul {
    display:flex;
    height:100%;
  }

  & ul li a {
    --padding-inline:1rem;
    height: 100%;
    align-items: center; 
    padding-inline: var(--padding-inline)
  }

    & ul li:last-child a {
      padding-inline-end:calc(var(--padding-inline)*2)
  }
}

.title a{
  font-size:1.5rem;
}


  </style>