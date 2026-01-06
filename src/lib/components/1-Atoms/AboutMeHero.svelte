<script>
  import { Wrapper } from '$lib/index.js'
  export let heroPicture = "https://media.licdn.com/dms/image/v2/D4E03AQEzWc5ZoCy0UA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719780890071?e=1769040000&v=beta&t=GEtJJA1tcyD4SsxJ5iaFGkWdOBgCupS8FBR25HFG4js"

</script>

<Wrapper slides=true>
  <section>
  <h1>
    <span class="title">Hello! I'm </span>
    <span class="name">sammm.my</span>
  </h1>
  <img alt="hero" src={heroPicture}>
</section>
</Wrapper>


<style>
  section {
    display: grid;
    grid-template-areas:
      "title"
      "image"
      "name";
    justify-items: center;
    align-content: center;
    gap:var(--gap-regular);
    height:100vh;
  }

  section img {
    border-radius:100rem;
    height:auto;
    width:auto;
    grid-area: image;
  }

  section h1 {
  letter-spacing: .2rem;
  font-size: 5rem;
  font-weight: var(--font-weight-bold);
  margin-block:0;
  line-height: 4.5rem;
  display: contents; 
  }

  .name {
    grid-area: name;
  }

  .title {
    grid-area: title;
    font-size:3rem;
  }

</style>