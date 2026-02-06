<script>
	import { Icons, Hyperlink, Wrapper } from '$lib/index.js';
	export let sources;

	export let footer = false;
	export let socials = false;
	export let arrow = false;
	export let workingProjects = false;
	export let heading;
	export let backgroundColor = 'none';
	export let external = false;
</script>

{#if heading}
	<Wrapper {backgroundColor}>
		<section class:working-projects={workingProjects}>
			<h2>{heading}</h2>

			<ul>
				{#each sources as reference}
					<li>
						<Hyperlink link={reference} {workingProjects} {footer} {socials} {arrow} {external} />
					</li>
				{/each}
			</ul>
		</section>
	</Wrapper>
{:else}
	<ul class:working-projects={workingProjects} style="background-color: {backgroundColor};">
		{#each sources as reference}
			<li>
				<Hyperlink link={reference} {workingProjects} {footer} {socials} {arrow} {external}/>
			</li>
		{/each}
	</ul>
{/if}

<style>
	ul {
		list-style: none;
		padding-inline: 0;
	}
</style>
