<!-- BackgroundAnimation.svelte -->
<div>
	<slot></slot>
</div>

<style>
	div {
		z-index: 0;
		background-color: var(--color-tertriary);
		background: var(--color-tertriary);
		height: 100vh;
		width: 100vw;
		padding: var(--padding-regular);
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		overflow: hidden;
	}
</style>
