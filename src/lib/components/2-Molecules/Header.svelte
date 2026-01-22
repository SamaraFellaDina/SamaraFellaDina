<script>
	import { HeaderNavigation } from '$lib/index.js';
</script>

<header>
	<a class="header" href="/">sammm.my</a>
	<HeaderNavigation />
</header>

<style>
	header {
		width: 100%;
		height: 50px;
		background-color: var(--color-dark);
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 0 0 1em;

		& a {
			color: var(--color-light);

			&::before {
				background-color: transparent;
			}
		}
	}
</style>
