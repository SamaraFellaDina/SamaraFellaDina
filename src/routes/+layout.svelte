<script>
    import { Header } from "$lib/index.js";
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();
</script>

<div class="frame">
  <Header variant='default'/>
  <main>{@render children?.()}</main>

</div>

<style>

.frame {
  display: block;
  position: relative;
}
</style>
