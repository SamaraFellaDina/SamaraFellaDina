  <script>
    export let heroPicture = "https://media.licdn.com/dms/image/v2/D4E03AQEzWc5ZoCy0UA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719780890071?e=1769040000&v=beta&t=GEtJJA1tcyD4SsxJ5iaFGkWdOBgCupS8FBR25HFG4js"
  </script>


  <div>
    <img class="hero" src={heroPicture} >
    <ul>
      <li> <img src="https://plus.unsplash.com/premium_photo-1746637466037-001842a48d31?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ></li>
      <li> <img src={heroPicture} ></li>
    </ul>
  </div>


  <style>
    div {
    display:flex;
    align-items: center;
    flex-direction: column;
    gap:var(--gap-regular);
    width:100%;

    @media(min-width:900px) {
    align-items: unset;

    }
  }

    .hero {
    max-height:50dvh;
    max-width: 50dvh;
    }
  div ul {
    display:none;

    @media(min-width:900px) {
    display: flex;
    gap:var(--gap-regular);
    list-style:none;
    margin:0;
    padding:0;
    flex-direction: row;
    }
  }

  div ul li {
    max-height:30dvh;
    max-width: 30dvh;
  }
  div ul li img {
    height: 100%;
  }
  </style>