  <script>
    export let content; 
  </script>


  <li>
    {content}
  </li>
  
<style>
  li {
  background-color: var(--color-secondary);
  border-radius: 10em;    
  padding: .5rem 1rem;
  font-weight: var(--font-weight-medium);
  width: auto;
  height: fit-content;
  line-height: 1.3em;
}
</style>