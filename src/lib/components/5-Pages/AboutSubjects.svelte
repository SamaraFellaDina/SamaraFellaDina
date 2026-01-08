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
</script>

<Wrapper slides='true'>
<section>
  <h2>
    Love doing things like:
  </h2>
  <Tags tags={tags}/>
</section>

<section>
  <h2>
    Love creating things like:
  </h2>
  <Tags invertColor='true' tags={tags}/>
</section>
</Wrapper>
