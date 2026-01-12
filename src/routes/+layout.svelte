<script>
    import { page } from '$app/stores';
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

  const hidePaths = ['/'];
  const visibleHeaderFooter = !hidePaths.includes($page.url.pathname);
</script>

<div>
  {#if visibleHeaderFooter}
    <Header variant='default'/>
  {/if}
  <main>{@render children?.()}</main>

  {#if visibleHeaderFooter}
    <Footer />
  {/if}
</div>
