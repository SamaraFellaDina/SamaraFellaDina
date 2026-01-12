<script>
  import { Icons } from '$lib/index.js';
  export let references;
  export let footer = false;
  export let socials = false;
  export let arrow = false;
</script>

    <ul class:footer={footer}>
    {#each references as reference}
      <li>
        <a href={reference.hyperlink}>

        {#if socials}
          {#if reference.hyperlink.includes('instagram')}
            <Icons icon='Instagram'/>
          {:else if reference.hyperlink.includes('tiktok')}
            <Icons icon='TikTok'/>
          {:else if reference.hyperlink.includes('youtube')}
            <Icons icon='Youtube'/>
          {:else if reference.hyperlink.includes('spotify')}
            <Icons icon='Spotify'/>
          {:else if reference.hyperlink.includes('linkedin')}
            <Icons icon='LinkedIn'/>
          {:else if reference.hyperlink.includes('github')}
            <Icons icon='Github'/>
          {/if}
        {/if}
          
          {reference.titleOfHyperlink}
          {#if arrow}
            <Icons 
            icon="arrow-right" 
            width="40"
            height="40"
            />
          {/if}


        </a>
      </li>
    {/each}
    </ul>

<style>
  
    li,
    a {
      color: var(--color-dark);
    }

  ul {
      list-style: none;
      padding-inline:0
    }

  ul li a {
      display: flex;
      align-items: center;
      transition:  var(--hover-transition);
      gap: .1rem;
      width: fit-content;
      text-decoration: none;
    }

  ul li a:hover {
      gap: var(--gap-small);
      background-color: var(--color-secondary);
      color: var(--color-primary);
      padding: .2rem .4rem;
    }

  ul li a {
      color:var(--color-secondary)
    }


  .footer li,
  .footer a {
    color:var(--color-primary);
  }

  .footer li a:hover {
    background-color: var(--color-primary);
    color: var(--color-secondary);
  }
</style>