<script>
  import { Wrapper } from '$lib/index.js'
  import { error } from '@sveltejs/kit';
	import { page } from '$app/state';
  const gif = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2l4bzFlNjcxdjI2endvN3g0MHc0MDNrYnFxa2FhazhjajcyZG9oMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LgR0AnXJBrO4E/giphy.gif'
</script>

<Wrapper backgroundColor='var(--color-secondary)'>
  <section>
  <h1>{page.status} | {page.error.message}</h1>
  <p>It seems like you're a little lost.</p>
  <img src={gif} alt='oops there has a error occured'/>
  <a href='/'>get me Home! :(</a>
  </section>
</Wrapper>

<style>
  section{
    min-height: 90dvh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
  }
</style>


