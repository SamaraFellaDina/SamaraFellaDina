<script>
  import { 
    MarkDownContent,
    Wrapper
    } from '$lib/index.js'
    export let markdown = 'false'
    export let content = 'no content available'
</script>

<Wrapper>
  {#if markdown = true}
    <MarkDownContent content={content}/>
  {/if}
</Wrapper>