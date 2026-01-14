<script>
	import { page } from '$app/state';
	import { Header, Footer } from '$lib/index.js';
	let { data, children } = $props();
	let footerData = data.footer;
</script>

{#if page.url.pathname === '/'}
	<main>{@render children()}</main>
{:else}
	<Header variant="default" />
	<main>{@render children()}</main>
	<Footer {footerData} />
{/if}
