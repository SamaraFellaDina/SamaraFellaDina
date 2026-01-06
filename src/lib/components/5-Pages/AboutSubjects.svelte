<script>
  import { 
    Wrapper,
    Tag
    } from '$lib/index.js'

    let tags = [
      "Motion Design",
      "Frontend Development",
      "UI/UX",
      "Graphic Design",
    ]
</script>

<Wrapper>
<section>
  <h2>
    Love doing things like:
  </h2>
  <Tag tags={tags}/>
</section>

<style>
  section {
    height:100dvh
  }
</style>
</Wrapper>
