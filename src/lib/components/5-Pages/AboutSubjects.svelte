<script>
  import { 
    Wrapper,
    Tags
    } from '$lib/index.js'

    let tags = [
      "Motion Design",
      "Frontend Development",
      "UI/UX",
      "Graphic Design",
    ]

    export let subjects;
    export let products; 
</script>

<Wrapper slides='true'>
<section>
  <h2>
    Love doing things like:
  </h2>
  <Tags tags={subjects}/>
</section>

<section>
  <h2>
    Love creating things like:
  </h2>
  <Tags invertColor='true' tags={products}/>
</section>
</Wrapper>
