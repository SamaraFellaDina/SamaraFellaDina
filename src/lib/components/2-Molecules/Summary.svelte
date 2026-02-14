<script>
	import { MarkDownContent } from '$lib/index.js';
	export let summary = 'no title';
	export let content = 'no content';
</script>

<details>
	<summary>{summary}</summary>
	<MarkDownContent {content} />
</details>

