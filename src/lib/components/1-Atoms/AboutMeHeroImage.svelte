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
    alt='hero' 
    src={heroImages[currentIndex].url} 
    width={heroImages[currentIndex].width} 
    height={heroImages[currentIndex].height}
  >
  </div>


  <style>
  div {
  display:flex;
  justify-content: center;
  width:100%;

  

    @media (min-width:700px) {
  padding:  0 var(--padding-medium);

  }
}
  img {
  --max-ratio:500px;
  aspect-ratio:1/1;
  max-height:var(--max-ratio);
  max-width:var(--max-ratio);
}

</style>