  <script>
    export let content; 
    export let invertColor= false;
  </script>


{#if content.length > 0}
  <li class:invert={invertColor}>
    {content}
  </li>
{/if}
  
<style>
  li {
  color:var(--color-primary);
  background-color: var(--color-secondary);
  border-radius: 10em;    
  padding: .5rem 1rem;
  font-weight: var(--font-weight-medium);
  width: auto;
  height: fit-content;
  line-height: 1.3em;
}

.invert {
  color:var(--color-secondary);
  background-color: var(--color-primary);
}
</style>