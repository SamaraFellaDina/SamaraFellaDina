<script>
  import * as AllIcons from './Icons/icon.js';
  export let icon;
  export let width = 24;
  export let height = 24;
  export let color = 'currentColor';
  export let fallbackText = false;

  const IconComponent = AllIcons[icon];
  const UndefinedIcon = AllIcons.Undefined;
</script>

{#if IconComponent}
  <svelte:component this={IconComponent} {width} {height} {color} />
{:else if fallbackText}
  <span>{icon}</span>
{:else}
  <svelte:component this={UndefinedIcon} {width} {height} {color} />
{/if}