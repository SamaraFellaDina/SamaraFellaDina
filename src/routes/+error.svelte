<script>
  import { error } from '@sveltejs/kit';
	import { page } from '$app/state';
</script>

<section>
  <h1>{page.status} | {page.error.message}</h1>
  <p>It seems you're a little lost.</p>
  <a href='/'>Home.</a>
</section>

