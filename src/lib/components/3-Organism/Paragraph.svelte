<script>
	import { MarkDownContent, Wrapper } from '$lib/index.js';
	export let markdown = 'false';
	export let content = 'no content available';
	export let fullWidth = false 
</script>



{#if fullWidth}
	<Wrapper fullWidth="true">
	{#if (markdown = true)}
		<MarkDownContent {content} />
	{:else}
		<slot></slot>
	{/if}
</Wrapper>

{:else}
<Wrapper paragraph="true">
	{#if (markdown = true)}
		<MarkDownContent {content} />
	{:else}
		<slot></slot>
	{/if}
</Wrapper>
{/if}

