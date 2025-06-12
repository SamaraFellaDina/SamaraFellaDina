<script>
    import { Header } from "$lib/index.js";
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();
</script>

<div>
  <Header />
  <main>{@render children?.()}</main>

</div>

<style>

div {
  display: block;

  @media (min-width: 500px) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  }
}
</style>
