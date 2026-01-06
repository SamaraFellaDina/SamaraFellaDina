<script>
  import { 
    Wrapper,
    Hero,
    HeroTitle
  } from '$lib/index.js'
  export let heroPicture = "https://media.licdn.com/dms/image/v2/D4E03AQEzWc5ZoCy0UA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719780890071?e=1769040000&v=beta&t=GEtJJA1tcyD4SsxJ5iaFGkWdOBgCupS8FBR25HFG4js"

</script>

<Wrapper>
  <HeroTitle heroTitle="Hi! I'm Sammy" />
  <div>
    <img class="hero" src={heroPicture} >
    <ul>
      <li> <img src="https://plus.unsplash.com/premium_photo-1746637466037-001842a48d31?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ></li>
      <li> <img src={heroPicture} ></li>
      <li> <img src={heroPicture} ></li>
    </ul>
  </div>
</Wrapper>

<style>
  div {
    display:flex;
    flex-direction: column;
    gap:var(--gap-regular);

    width:100%;
    max-height:70dvh;

      @media(min-width:700px) {
      flex-direction: row;
    }

  }
  div ul {
    display: flex;
    gap:var(--gap-regular);
    justify-content: space-between;
    list-style:none;
    margin:0;
    padding:0;
    @media(min-width:700px) {
      flex-direction: column;
    }
  }

  div ul li {
    --ratio:auto;
    width:var(--ratio);
    height:var(--ratio);
  }
  div ul li img {
    height: 100%;
  }

  .hero {
    width:100%;
    max-height:50dvh;
    object-fit:cover;
  }
</style>
  

