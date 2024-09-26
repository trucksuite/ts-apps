<script lang="ts">
  import EditIcon from '../icons/Edit.svelte';
  import SaveIcon from '../icons/Save.svelte';

  export let label: string | undefined;
  export let input: string | undefined;
  export let name: string | undefined = '';
  export let editMode: boolean = false;
  export let isEditable: boolean = false;
  export let doneEditing: boolean = false;

  $: isEditing = false;

  // console.log('doneEditing', doneEditing);
</script>

<!-- {#if !editMode || !isEditable} -->
<div class="min-w-40 inline-flex flex-col justify-start items-start gap-1">
  <span class="flex gap-2">
    {@html label}
    {#if editMode && isEditable}
      <button type="button" on:click={() => (isEditing = true)}>
        <svelte:component this={EditIcon} />
      </button>
    {/if}
  </span>
  <div class="font-semibold">
    {#if !editMode && !isEditing}{@html input}{/if}
    {#if editMode && isEditing && !doneEditing}
      <input hidden type="text" name="key" value={name} />
      <input id={name} {name} type="text" class="input" value={input} />
    {/if}
  </div>
</div>
<!-- {/if} -->
<!-- {#if editMode && isEditable && !isEditing}
  <div class="min-w-40 inline-flex flex-col justify-start items-start gap-1">
    <span class="flex gap-2">
      {@html label}
      <button type="button" on:click={() => (isEditing = true)}>
        <svelte:component this={EditIcon} />
      </button>
    </span>
    <div class="font-semibold">
      {@html input}
    </div>
  </div>
{/if}
{#if isEditable && editMode && isEditing}
  <div class="min-w-40 inline-flex flex-col justify-start items-start gap-1">
    <span class="flex gap-2">
      {@html label}
    </span>
    <div class="relative flex items-center">
      <input hidden type="text" name="key" value={name} />
      <input id={name} {name} type="text" class="input" value={input} />
      
    </div>
  </div>
{/if} -->
