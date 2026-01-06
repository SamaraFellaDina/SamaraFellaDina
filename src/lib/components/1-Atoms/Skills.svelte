<script>
  import { Wrapper } from '$lib/index.js'
</script>

<Wrapper slides='true' backgroundColor='var(--color-secondary)'>
  <section>
    <h2>Adobe Creative Cloud</h2>
    <ul>
      <li>
        <label for="progress-bar"> Photoshop
          <progress id="progress-bar" max="100" value="30">30%</progress>
        </label>
      </li>
        <li>
        <label for="progress-bar"> Illustrator
          <progress id="progress-bar" max="100" value="70"></progress>
        </label>
      </li>
      <li>
        <label for="progress-bar"> Indesign
          <progress id="progress-bar" max="100" value="50"></progress>
        </label>
      </li>
    </ul>
  </section>

    <section>
    <h2>Code</h2>
    <ul>
      <li>
        <label for="progress-bar"> Html
          <progress id="progress-bar" max="100" value="30">30%</progress>
        </label>
      </li>
        <li>
        <label for="progress-bar"> Css
          <progress id="progress-bar" max="100" value="70"></progress>
        </label>
      </li>
      <li>
        <label for="progress-bar"> Sveltekit
          <progress id="progress-bar" max="100" value="50"></progress>
        </label>
      </li>
    </ul>
  </section>
  
</Wrapper>



<style>
  section {
    display:grid;
  }
  
  section ul {
    display: block;
    list-style-type: none;
    margin-block:0;
    padding-inline:0;
    unicode-bidi: isolate;
  }
  section ul li label {
    display:flex;
    align-items:center;
    gap:var(--gap-regular);
    justify-content: space-between;
    width:300px;
  }

progress {
  inline-size: 10em;
  block-size: 0.75em;
  appearance: none;
  border-radius: 999px;
  background-color: var(--color-dark);
}

progress::-webkit-progress-bar {
  background-color: var(--color-dark);
  border-radius: 999px;
}

progress::-webkit-progress-value {
  background-color: var(--color-primary);
  border-radius: 999px;
}

progress::-moz-progress-bar {
  background-color: var(--color-primary);
  border-radius: 999px;
}
</style>