<script>
  import { Icons } from '$lib/index.js';
  export let footer = false;
  export let socials = false;
  export let arrow = false;
  export let link;
</script>

<li class:footer={footer}>
    <a href={link.hyperlink}>
      {#if socials}
        {#if link.hyperlink.includes('instagram')}
          <Icons icon='Instagram'/>
        {:else if link.hyperlink.includes('tiktok')}
          <Icons icon='TikTok'/>
        {:else if link.hyperlink.includes('youtube')}
          <Icons icon='Youtube'/>
        {:else if link.hyperlink.includes('spotify')}
          <Icons icon='Spotify'/>
        {:else if link.hyperlink.includes('linkedin')}
          <Icons icon='LinkedIn'/>
        {:else if link.hyperlink.includes('github')}
          <Icons icon='Github'/>
        {/if}
      {/if}
          {link.titleOfHyperlink}
          {#if arrow}
            <Icons 
            icon="arrow-right" 
            width="40"
            height="40"
            />
          {/if}
        </a>
      </li>

    <style>

  li,
  a {
    color: var(--color-dark);
  }

  li a {
      display: flex;
      align-items: center;
      transition:  var(--hover-transition);
      gap: .1rem;
      width: fit-content;
      text-decoration: none;
    }

  li a:hover {
      gap: var(--gap-small);
      background-color: var(--color-secondary);
      color: var(--color-primary);
      padding: .2rem .4rem;
    }

  li a {
      color:var(--color-secondary)
    }


  .footer,
  .footer a {
    color:var(--color-primary);
    font-weight: 500;
  }

  .footer a:hover {
    background-color: var(--color-primary);
    color: var(--color-secondary);
  }
</style>