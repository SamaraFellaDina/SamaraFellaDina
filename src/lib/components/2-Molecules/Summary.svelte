<script>
	import { MarkDownContent } from '$lib/index.js';
	export let summary = 'no title';
	export let content = 'no content';
</script>

<details>
	<summary>{summary}</summary>
	<MarkDownContent {content} />
</details>

<style>
	details {
		--details-border: 1px solid var(--color-primary);
		border-top: var(--details-border);
		border-left: none;
		border-right: none;
		padding: var(--padding-regular);

		&:last-child {
			border-bottom: var(--details-border);
		}

		&:not([open]) {
			cursor: pointer;
		}
	}

	details summary {
		--font-size: 1.5rem;
		font-weight: var(--font-weight-medium);
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
		font-family: var(--font-family-heading);
		color: var(--color-primary);
		font-size: var(--font-size);
		display: flex;
		justify-content: space-between;
		cursor: pointer;
		transition: var(--hover-transition);
	}

	details summary:hover {
		padding: 2rem 0;
		font-size: 2rem;
	}

	[open] summary {
		padding: 1em 0em;
		font-size: calc(var(--font-size) + 0.5rem);
	}
	summary::after {
		content: '+';
	}

	[open] summary::after {
		content: '-';
	}

	summary::-webkit-details-marker {
		display: none;
	}
</style>
