<script>
  export let heroTitle ='input hero title here!';
  export let thumbmail;
</script>

<div>


{#if thumbmail}
  <img alt="thumbmail" href="{thumbmail}"/>
{/if}

<h1>{heroTitle}</h1>

</div>

<style>
  div {
    height: 50dvh;
    display: flex;
    flex-direction:column;
    justify-content:flex-end
  }

  div h1 {
    color: var(--link-color);
    font-style:italic;
    letter-spacing: .2rem;
    text-transform:uppercase;
    font-size: 5rem;
    font-weight: 900;
  }
</style>