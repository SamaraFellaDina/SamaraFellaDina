<script>
  export let heroTitle ='input hero title here!';
  export let thumbmail = "https://media.tenor.com/wDrtIwh5_ckAAAAM/lebron-james-mickey-mouse.gif";
</script>

<div>


{#if thumbmail}
  <img alt="thumbmail" src="{thumbmail}"/>
{/if}

<h1>{heroTitle}</h1>

</div>

<style>
  div {
    height: 50dvh;
    display: flex;
    flex-direction:column;
    justify-content:flex-end;

    & img {
      height:40dvh;
      width:100%;
      object-fit:cover;
      box-shadow: inset 0 0 10px red;
      
    }

    & h1 {
    color: var(--link-color);
    font-style:italic;
    letter-spacing: .2rem;
    text-transform:uppercase;
    font-size: 5rem;
    font-weight: 900;
    margin-block:0;
    }
  }
</style>