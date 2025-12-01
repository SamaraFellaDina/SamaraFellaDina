<script>
  export let heroTitle ='input hero title here!';
  export let thumbmail;
</script>

<div>
{#if thumbmail}
<div class="shadow">
  <img alt="thumbmail" src="{thumbmail}"/>
</div>
{/if}
<h1>{heroTitle}</h1>
</div>

<style>
  div {
    height: 50dvh;
    display: flex;
    flex-direction:column;
    justify-content:flex-end;


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

  .shadow {
    position: relative;
  }
  .shadow::after {
    content: "";
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 15px 20px var(--text-color-dark);
  }
    img {
    height:40dvh;
    width:100%;
    object-fit:cover;
  }
</style>