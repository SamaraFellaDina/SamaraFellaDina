<script>
	export let variant;

	let x = Math.random() * 200 - 100;
	let y = Math.random() * 200 - 100;

	export let open = false;
	export let onClick = () => {
		open = !open
	}
</script>

<nav
	class={variant}
	style={variant === 'title'}
>
<button on:click={onClick} class="menu-button">
	Menu
</button>

<div class:open={open} >
	<ul>
		<li><a href="/contact">contact</a></li>
		<li><a href="/portfolio">portfolio</a></li>
		<li><a href="/about-me">about me</a></li>
	</ul>

	<button on:click={onClick}>
		X Close
	</button>
</div>

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

	nav ul li a,
	div button {
		color: var(--color-dark);
		background-color: var(--color-primary);
		display: flex;
		width: fit-content;

		&:hover {
			background-color: var(--color-secondary);
			color: var(--color-tertriary);
		}
	}

	.menu-button {
		position: fixed;
		left:50%;
		bottom:10%;
		padding:1rem;
		border-radius:200px;
		aspect-ratio:1/1;
		background:var(--color-primary);

		@media (min-width:700px) {
			display:none;
		}
	}

	.default {
		height: 100%;
	}

	.default div {
		position:absolute;
		bottom:0;
		left:0;
		width:100%;
		position: fixed;
		flex-direction:column;
		top: 0;
		left: 0;
		display:flex;
		flex-direction: column;
		/* transform: translate(-100%, 0); */
	}

	.default div ul {
		width:100%;
		height:100%;
		display:flex;
		flex-direction: column;
	}

	.default ul li a {
		--padding-inline: 1rem;
		height: 100%;
		width:100%;
		align-items: center;
		padding-inline: var(--padding-inline);
	}

	.title a {
		font-size: 1.5rem;
	}
</style>