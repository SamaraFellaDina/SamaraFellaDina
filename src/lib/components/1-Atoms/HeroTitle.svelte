<script>
  export let heroTitle ='input hero title here!';
  export let aboutMe = false;
</script>

  <h1 class:about-me={aboutMe}>
    {heroTitle}
  </h1>

<style>
    h1 {
    color: var(--color-primary);
    font-style:italic;
    letter-spacing: .2rem;
    text-transform:uppercase;
    font-size: 5rem;
    font-weight: var(--font-weight-bold);
    margin-block:0;
    line-height: 4.5rem;
    }

    .about-me {
    text-align:center;

    @media (min-width:900px) {
      text-align: left; 
    }
  }
</style>