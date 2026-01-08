<script>
  import { onDestroy } from 'svelte';

  export let heroImages;

  let currentIndex = 0; 
  const intervalTime = 3000;

  function nextImage() {
    currentIndex = (currentIndex + 1) % heroImages.length;
  }

  const interval = setInterval(nextImage, intervalTime);
  onDestroy(() => clearInterval(interval));
</script>

<div>
  <img 
    class="hero"
    alt='hero' 
    src={heroImages[currentIndex].url} 
    width={heroImages[currentIndex].width} 
    height={heroImages[currentIndex].height}
  >
  <ul>
      <li> <img src="https://plus.unsplash.com/premium_photo-1746637466037-001842a48d31?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ></li>
      <li> <img src={heroImages} ></li>
    </ul>
  </div>


  <style>div {
  display:flex;
  justify-content: center;
  width:100%;
  max-height:60dvh;

  @media(min-width:900px) {
    align-items: unset;
    gap:var(--gap-regular);
  }
}

.hero {
  max-height:60dvh;
  max-width: 60dvh; 
}

div ul {
  display:none;

  @media(min-width:900px) {
    display: flex;
    gap: var(--gap-regular);
    list-style: none;
    margin: 0;
    padding: 0;
    flex-direction: column;
    justify-content: space-between;
  }
}

div ul li {
  aspect-ratio: 1/1;
  overflow: hidden;   
}

div ul li img {
  width: 100%;
  height: 100%;
}
</style>