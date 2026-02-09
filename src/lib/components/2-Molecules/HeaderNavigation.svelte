<script>
	import { page } from '$app/stores';
	import { Icons } from '$lib/index.js';

	$: homePage = $page.url.pathname === '/';

	let x = Math.random() * 200 - 100;
	let y = Math.random() * 200 - 100;

	let open = false;
	let onClick = () => {
		open = !open;
	};

	let iconSize = 40;
	let navigation = [
		{ label: 'contact', href: '/contact' },
		{ label: 'portfolio', href: '/portfolio' },
		{ label: 'about me', href: '/about-me' }
	];
</script>

<nav class:homepage={homePage} style={homePage ? `transform: translate(${x}px, ${y}px);` : ''}>
	<ul class:open>
		{#each navigation as item}
			<li>
				<a data-sveltekit-reload href={item.href}>
					{item.label}
					<span class="icon">
						<Icons icon="arrow-right" width={iconSize} height={iconSize} />
					</span>
				</a>
			</li>
		{/each}
	</ul>
	<button on:click={onClick}>
		{open ? 'close' : 'menu'}
	</button>
</nav>

<style>
	nav {
		z-index: 2;
		height: 100%;
	}

	nav ul {
		list-style: none;
		margin-block: 0;
		padding-inline: 0;
		z-index: 2;

		display: flex;
		flex-direction: column;
		height: 100%;

		position: fixed;
		bottom: 0;
		left: 0;

		width: 100%;
		background: var(--color-primary);
		transform: translateY(100%);
		justify-content: center;
		transition: var(--hover-transition);
		overflow: hidden;

		@media (min-width: 700px) {
			flex-direction: row;
			transform: none;
			position: static;
		}
	}

	nav ul.open {
		transform: translateY(0);
	}

	nav ul li {
		height: 6rem;

		@media (min-width: 700px) {
			height: 100%;
		}
	}

	.icon {
		@media (min-width: 700px) {
			display: none;
		}
	}

	nav ul li a {
		--padding-inline: 2rem;

		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;

		font-size: var(--text-regular-size-l);
		text-decoration: none;
		color: var(--color-secondary);
		background-color: var(--color-primary);

		padding-inline: var(--padding-inline);
		transition: var(--hover-transition);

		@media (min-width: 700px) {
			--padding-inline: 1rem;
			color: var(--color-dark);
			font-size: var(--text-regular-size);
		}
	}

	nav ul li a:hover {
		background-color: var(--color-secondary);
		color: var(--color-tertriary);

		@media (min-width: 700px) {
			text-decoration: underline;
		}
	}

	nav ul li:last-child a {
		@media (min-width: 700px) {
			padding-inline-end: calc(var(--padding-inline) * 2);
		}
	}

	nav button {
		--min-size: 5rem;
		--invert: blur(2px) invert(1);

		display: flex;
		align-items: center;
		justify-content: center;

		position: fixed;
		bottom: 5%;
		left: 50%;
		transform: translateX(-50%);

		aspect-ratio: 1 / 1;
		min-width: var(--min-size);
		min-height: var(--min-size);

		border-radius: var(--border-radius-full);
		border: none;

		color: var(--color-dark);
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: var(--invert);
		-webkit-backdrop-filter: var(--invert);

		z-index: 10;
		transition: var(--hover-transition);

		@media (min-width: 700px) {
			display: none;
		}
	}

	nav button:hover {
		background-color: var(--color-tertriary);
		color: var(--color-secondary);
		transform: translateX(-50%) scale(1.2);
	}

	.homepage {
		position: absolute;
		top: 50%;
		left: 50%;
		width: unset;
		height: unset;
	}

	.homepage ul {
		flex-direction: column;
		background: unset;
		position: relative;
		transform: unset;
	}

	.homepage ul li {
		font-size: var(--text-regular-size-l);
		height: unset;
	}

	.homepage ul li a {
		width: fit-content;
		padding: 0;
		color: var(--color-dark);
	}

	.homepage ul li a:last-child {
		padding-inline-end: 0;
	}

	.homepage .icon {
		display: none;
	}

	.homepage button {
		display: none;
	}
</style>
