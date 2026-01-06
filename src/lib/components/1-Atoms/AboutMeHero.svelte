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
    <img src={heroPicture} >
    <ul>
      <li> <img src={heroPicture} ></li>
      <li> <img src={heroPicture} ></li>
      <li> <img src={heroPicture} ></li>
    </ul>
  </div>
</Wrapper>

<style>
  div {
    display: block;
    width:100%;
    max-height:80dvh;
      @media(min-width:700px) {
      display:flex;
      gap:var(--gap-regular);
    }
  }
  div ul {
    display:none;
    list-style:none;
    margin:0;
    padding:0;
    @media(min-width:700px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap:var(--gap-regular);
    }
  }

  div ul li img {
    height: 100%;
  }

  img {
    width:100%;
    object-fit:cover;
  }
</style>
  

