<script>
	export let variant;

	let x = Math.random() * 200 - 100;
	let y = Math.random() * 200 - 100;
</script>

<nav
	class={variant}
	style={variant === 'title'
		? 'position: absolute; top: 50%; left: 50%; transform: translate(' + x + 'px, ' + y + 'px);'
		: ''}
>
<button>
	Menu
</button>
	<ul>
		<li><a href="/contact">contact</a></li>
		<li><a href="/portfolio">portfolio</a></li>
		<li><a href="/about-me">about me</a></li>
	</ul>
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

		&:hover {
			background-color: var(--color-secondary);
			color: var(--color-tertriary);
		}
	}

	nav button {
		position: fixed;
		left:50%;
		bottom:10%;
		padding:1rem;
		border-radius:200px;
		aspect-ratio:1/1;
		background:var(--color-primary);

		@media (min-width:500px) {
			display:none;
		}
	}

	.default {
		height: 100%;
	}

		.default ul {
		display: flex;
		height: 100%;
		width:100%;
		position: absolute;
		flex-direction:column;
		top: 0;
		left: 0;
		transform: translate(-100%, 0);

		@media (min-width:500px) {
			transform:none;
			position:relative;
			flex-direction:row;
			top: none;
			left: none;
		}
	}

	.default ul li {
		@media (min-width:500px) {
			width:100%;
		}
	}

	.default ul li a {
		--padding-inline: 1rem;
		height: 100%;
		width:100%;
		align-items: center;
		padding-inline: var(--padding-inline);
	}

	.default ul li:last-child a {
		@media (min-width:500px) {
			padding-inline-end: calc(var(--padding-inline) * 2);
		}
	}

	.title a {
		font-size: 1.5rem;
	}
</style>


<!-- <script>
	export let variant;

	let x = Math.random() * 200 - 100;
	let y = Math.random() * 200 - 100;
</script>

<nav
	class={variant}
	style={variant === 'title'
		? 'position: absolute; top: 50%; left: 50%; transform: translate(' + x + 'px, ' + y + 'px);'
		: ''}
>
	<ul>
		<li><a href="/contact">contact</a></li>
		<li><a href="/portfolio">portfolio</a></li>
		<li><a href="/about-me">about me</a></li>
	</ul>
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

		&:hover {
			background-color: var(--color-secondary);
			color: var(--color-tertriary);
		}
	}

	.default {
		height: 100%;

		& ul {
			display: flex;
			height: 100%;
		}

		& ul li a {
			--padding-inline: 1rem;
			height: 100%;
			align-items: center;
			padding-inline: var(--padding-inline);
		}

		& ul li:last-child a {
			padding-inline-end: calc(var(--padding-inline) * 2);
		}
	}

	.title a {
		font-size: 1.5rem;
	}
</style>
 -->