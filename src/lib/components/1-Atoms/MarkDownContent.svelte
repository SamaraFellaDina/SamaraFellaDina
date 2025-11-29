<script>
  import { marked } from 'marked';
  export let content;
</script>

{@html marked(content)}