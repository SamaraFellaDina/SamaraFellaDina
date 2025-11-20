  <script>
    export let variant;
  </script>
  
  <nav class="{variant}">
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
  }

  &  ul li a {
  display: flex;        
  align-items: center; 
  height: 100%;
  padding: 0 1rem;
  }
}

  </style>