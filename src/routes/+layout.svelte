<script>
	import { page } from '$app/state';
	import { Header, Footer } from '$lib/index.js';

	export let data;
	export let children;

	$: footerData = data.footer;

	import { onMount } from 'svelte';

	onMount(async () => {

		const { gsap } = await import('gsap');
		const { ScrollSmoother } = await import('gsap/ScrollSmoother');

		gsap.registerPlugin(ScrollSmoother);

		let smoother = ScrollSmoother.create({
			wrapper: '.smooth-wrapper',
			content: '.smooth-content'
		})
	});
</script>

{#if page.url.pathname === '/'}
	<main>{@render children()}</main>
{:else}
		<div class='smooth-wrapper'>
			<div class='smooth-content'>
				<Header variant="default" />
					<main>
						{@render children()}
					</main>
				<Footer {footerData} />
			</div>
		</div>
{/if}