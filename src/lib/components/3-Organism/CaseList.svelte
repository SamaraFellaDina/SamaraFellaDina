<script>
	import { Wrapper, ContentGenerator } from '$lib/index.js';
	export let cases = [];
	const listOfCases = cases?.[0]?.listOfCases ?? [];
</script>

<Wrapper>
	<ul>
		{#each listOfCases as caseItem}
			<li class='scroll-grow'>
				<a href="/portfolio/{caseItem.slug}">
					<ContentGenerator asset={caseItem.thumbnail} />
					<section>
						<h2>{caseItem.caseTitle}</h2>
						<p>{caseItem.location}</p>
						<p>{caseItem.year}</p>
					</section>
				</a>
			</li>
		{/each}
	</ul>
</Wrapper>

<style>
	ul {
		display: grid;
		position: relative;
		gap: var(--gap-regular);
		padding: var(--padding-medium) 0;

		@media (min-width: 700px) {
			display: block;
			columns: 2;
		}
	}

	ul li {
		width: 100%;
		height: 100%;
		transition: var(--hover-transition);

		@media (min-width: 700px) {
			break-inside: avoid;
			margin-bottom: var(--gap-regular);
		}
	}

	ul li a {
		display: flex;
		flex-direction: column;
		height: 100%;
		position: relative;
	}

	ul li :global(img),
	ul li :global(video) {
		max-height: 500px;
		object-fit: cover;
		display: block;
	}

	ul li:hover {
		@media (min-width: 700px) {
			&:nth-child(even) {
				transform: rotate(4deg) scale(1.05);
			}
			&:nth-child(odd) {
				transform: rotate(-4deg);
			}

			& a section {
				opacity: 1;
			}
		}
	}

	ul li a section {
		display: none;
		@media (min-width: 700px) {
			opacity: 0;
			padding: 2rem;
			transition: var(--hover-transition);
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: var(--gap-small);
			position: absolute;
			width: 100%;
			height: 100%;
			border-radius: var(--border-radius);
			color: var(--color-primary);
			background-color: var(--color-shadow);
		}
	}

	ul li a section h2,
	ul li a section p {
		line-height: normal;
	}

	ul li a section p {
		font-size: var(--text-regular-size-s);
		margin-block: 0;
		color: var(--color-light);
	}
	ul li a section h2 {
		font-size: var(--text-regular-size-l);
		line-height: 1.5rem;
		font-weight: var(--font-weight-medium);
		margin-block: 0 1rem;
	}
</style>
