<script>
  import { Tag } from '$lib/index.js'
  import * as AllIcons from './Icons/icon.js';

  export let icon;
  export let width = 24;
  export let height = 24;
  export let color = 'currentColor';
  export let fallbackText = false;
  export let fallbackTag = false;

function normalize(str) {
  return str?.toLowerCase().replace(/[-_\s.]/g, '');
}

  $: normalizedInput = normalize(icon);
  $: IconComponent = Object.entries(AllIcons).find(
    ([key]) => normalize(key) === normalizedInput
  )?.[1];
  const UndefinedIcon = AllIcons.Undefined;
</script>

{#if IconComponent}
  <svelte:component this={IconComponent} {width} {height} {color} />
{:else if fallbackText}
  <span>{icon}</span>
  {:else if fallbackTag}
  <Tag content={icon}/>
{:else}
  <svelte:component this={UndefinedIcon} {width} {height} {color} />
{/if}