<script>
    import { page } from '$app/state';
    import { 
      Header,
      Footer
    } from "$lib/index.js";
	let { data, children } = $props();

</script>

<div>
    <Header variant='default'/>
  <main>{@render children()}
</main>

    <Footer />
</div>
