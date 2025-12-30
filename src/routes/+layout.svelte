<script>
    import { 
      Header,
      Footer
    } from "$lib/index.js";
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();
</script>

<div>
  <Header variant='default'/>
  <main>{@render children?.()}</main>
  <Footer />
</div>

<style>


</style>
