<script>
  import { Icons } from '$lib/index.js';
  export let footer = false;
  export let socials = false;
  export let arrow = false;
  export let link;
  export let title;
</script>


    <a class:footer={footer} href={link.hyperlink}>
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
        {#if link.titleOfHyperlink}
          {link.titleOfHyperlink}
          {:else}
          {title}
        {/if}
          {#if arrow}
            <Icons 
            icon="arrow-right" 
            width="40"
            height="40"
            />
          {/if}
        </a>


    <style>

  a {
      color: var(--color-dark);
      display: flex;
      align-items: center;
      transition:  var(--hover-transition);
      gap: .1rem;
      width: fit-content;
      text-decoration: none;
      color:var(--color-secondary)
  }

  a:hover {
      gap: var(--gap-small);
      background-color: var(--color-secondary);
      color: var(--color-primary);
      padding: .2rem .4rem;
    }

  .footer {
    color:var(--color-primary);
    font-weight: 500;
  }

  .footer:hover {
    background-color: var(--color-primary);
    color: var(--color-secondary);
  }
</style>