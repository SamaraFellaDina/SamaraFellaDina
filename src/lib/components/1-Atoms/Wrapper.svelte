<script>
	export let backgroundColor = 'var(--color-dark)';
	export let fullwidth = false;
	export let slides = false;
	export let paragraph = false;
</script>

<div
	class="wrapper
        {fullwidth ? ' wrapper-fullwidth' : ''}
        {slides ? ' wrapper-slides' : ''}
        {paragraph ? ' wrapper-paragraph' : ''}"
	style="background-color: {backgroundColor};"
>
	<div class="wrapper-content">
		<slot />
	</div>
</div>

<style>
	.wrapper {
		padding: 1rem 2rem;
		display: flex;
		justify-content: center;
		background-color: var(--wrapper-background-color);
	}

	.wrapper-content {
		width: 100%;
		max-width: 900px;
	}

	.wrapper-fullwidth {
		padding: 0;

		@media (min-width: 700px) {
			padding: var(--padding-containter);
		}
	}

	.wrapper-slides {
		min-height: 100dvh;

		& .wrapper-content {
			display: grid;
			align-items: center;
			align-content: center;
		}
	}

	.wrapper-paragraph {
		@media (min-width: 500px) {
			padding: var(--padding-containter-large);
		}

		& .wrapper-content {
			max-width: 700px;
		}
	}
</style>
