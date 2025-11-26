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
  <Header />
  <main>{@render children?.()}</main>

</div>

<style>

.frame {
  display: block;
  position: relative;

  @media (min-width: 500px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  }
}
</style>
