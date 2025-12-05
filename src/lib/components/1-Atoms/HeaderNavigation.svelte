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


.default ul,
.title ul {
  list-style: none;
  z-index: 2;
  margin-block:0;
  padding-inline:0;
}

.title {
  display: block;
  position: relative;
  z-index: 3;
  font-size: 2rem;
}

.default {
  height: 100%;

  &  ul {
    display: flex;
    justify-content: flex-end;
    height: 100%

  }

  &  ul li {
    height: 100%;
    cursor: pointer;
  }

  &  ul li a {
  display: flex;        
  align-items: center; 
  height: 100%;
  padding: 0 1rem;
  }
}

a {
  text-decoration: none;
  color:var(--text-color-dark);
  font-weight: 600;

  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--link-color); 
    z-index: -2; 
  }

  &::after {
    content: "";
    color:var(--text-color-light);
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: var(--link-color-active); 
    transition: var(--hover-transition);
    z-index: -1; 
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: var(--text-color-light);
    transition-delay: 100ms;
  }
}

  </style>