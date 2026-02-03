<script>
  import { Wrapper, Tag } from '$lib/index.js'
  let placeholderImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/1280px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
</script>

<Wrapper>
  <ul>
    <li>
      <img src={placeholderImage} alt="career">
      <div>
        <Tag content="September, 2023"/>
        <section>
          <h2>Starting in Frontend Development</h2>
          <p>
            Started my degree in Frontend Design and Development
            in Amsterdam (University of Applied Sciences.) I was a little scared, because I always wanted to learn code, but didn't know where to begin. It was overwhelming at first.
          </p>
        </section>
      </div>
    </li>

        <li>
      <img src={placeholderImage} alt="career">
      <div>
        <Tag content="September, 2023"/>
        <section>
          <h2>Starting in Frontend Development</h2>
          <p>
            Started my degree in Frontend Design and Development
            in Amsterdam (University of Applied Sciences.) I was a little scared, because I always wanted to learn code, but didn't know where to begin. It was overwhelming at first.
          </p>
        </section>
      </div>
    </li>
  </ul>
</Wrapper>



<style>
  ul li {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--gap-regular);
  }

  ul li img {
    aspect-ratio: 1/2;
    height: 50dvh;
  }
</style>