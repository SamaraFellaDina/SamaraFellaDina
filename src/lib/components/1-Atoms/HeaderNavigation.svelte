<script>
	import { Icons } from '$lib/index.js'
	export let variant;

	let x = Math.random() * 200 - 100;
	let y = Math.random() * 200 - 100;

	let open = false;
	let onClick = () => {
	open = !open
	}

	let iconSize = 40;
</script>

<nav
	class={variant}
	style={variant === 'title'
		? 'position: absolute; top: 50%; left: 50%; transform: translate(' + x + 'px, ' + y + 'px);'
		: ''}
>
	<ul class:open={open}>
		<li><a href="/contact">contact <Icons icon="arrow-right" width={iconSize} height={iconSize}/></a></li>
		<li><a href="/portfolio">portfolio <Icons icon="arrow-right" width={iconSize} height={iconSize}/></a></li>
		<li><a href="/about-me">about me <Icons icon="arrow-right" width={iconSize} height={iconSize}/></a></li>
	</ul>
	<button on:click={onClick}>
			{open ? 'close' : 'menu'}
	</button>
</nav>

<style>
	nav {
		z-index: 2;
	}

	nav ul {
		list-style: none;
		z-index: 2;
		margin-block: 0;
		padding-inline: 0;
	}

	nav ul li {
		height: 100%;
	}

	nav ul li a {
		color: var(--color-dark);
		background-color: var(--color-primary);
		display: flex;
		width: fit-content;
		transition:var(--hover-transition);

		&:hover {
			background-color: var(--color-secondary);
			color: var(--color-tertriary);
		}
	}

		nav button {
		display:none;
		position: relative;
		z-index: 10;
		color:var(--color-dark);
		background:var(--color-primary);
		border:none;
		backdrop-filter: invert(1);
		-webkit-backdrop-filter: invert(1); 
		background: rgba(255,255,255,0.2);
	}

	.default {
		height: 100%;
	}

		.default .open {
		transform: translate(0, 0);
		overflow:hidden;
	}

		.default ul {
		z-index: 2;
			display: flex;
			flex-direction:column;
			height: 100%;
			position:fixed;
			bottom:0;
			left:0;
			background:var(--color-primary);
			width:100%;
			transform: translate(0, 100%);
			justify-content: center;
			transition:var(--hover-transition);
			@media (min-width:700px) {
				flex-direction:row;
			}
		}

		.default ul li {
    height: 6rem;
		}
		.default ul li a {
			--padding-inline: 2rem;
			font-size:var(--text-regular-size-l);
			color: var(--color-secondary);
			text-decoration:none;
			height: 100%;
			width:100%;
			align-items: center;
			padding-inline: var(--padding-inline);

			@media (min-width:700px) {
				--padding-inline: 1rem;
				color: var(--color-dark);
			}
		}

		.default ul li:last-child a {
			@media (min-width:700px) {
				padding-inline-end: calc(var(--padding-inline) * 2);
			}
		}

.default button {
		--min-size: 5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		bottom: 10%;
		left: 50%;
		transform: translateX(-50%);
		aspect-ratio: 1 / 1;
		min-width: var(--min-size);
		min-height: var(--min-size);
		border-radius: var(--border-radius-full);
		z-index: 10;
		transition:var(--hover-transition);

			@media (min-width:700px) {
				display:none;
			}
		}

					.default button:hover {
				background-color:var(--color-tertriary);
				color:var(--color-secondary);
				transform: translateX(-50%) scale(1.2);
			}

	.title a {
		font-size: 1.5rem;
	}
</style>
