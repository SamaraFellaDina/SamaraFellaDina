<script>
    import { Header } from "$lib/index.js";
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();
</script>

<Header />

<main>{@render children?.()}</main>


