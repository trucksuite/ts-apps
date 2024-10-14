<script lang="ts">
  import { getContext } from 'svelte';
  import EditIcon from '../icons/Edit.svelte';
  import SaveIcon from '../icons/Save.svelte';
  import type { Writable } from 'svelte/store';

  export let type = 'text';
  export let label: string | undefined;
  export let input: string | number | Date | undefined;
  export let name: string | undefined = '';
  export let editMode: boolean = false;
  export let isEditable: boolean = false;

  $: status = 'static';

  const resetStatus = getContext<Writable<boolean>>('resetStatus');

  $: if ($resetStatus) {
    status = 'static';
    // $resetStatus = false;
  }
  // $: console.table({
  //   editMode: editMode,
  //   isEditable: isEditable,
  //   status: status,
  //   resetStatus: $resetStatus
  // });
</script>

<!-- {#if !editMode || !isEditable} -->
<div class="inline-flex flex-col justify-start items-start gap-1">
  <span class="flex gap-2">
    <div class="label">
      <span>
        {@html label}
      </span>
    </div>
    {#if editMode && isEditable}
      <button class="text-primary-500" type="button" on:click={() => (status = 'editing')}>
        <svelte:component this={EditIcon} />
      </button>
    {/if}
  </span>
  <div class="font-semibold">
    {#if status === 'static'}{@html input}{/if}
    {#if status === 'editing'}
      <input hidden type="text" name="key" value={name} />
      {#if type === 'text'}<input id={name} {name} type="text" class="input" value={input} />{/if}
      <!-- ADD other types here 🔥🔥🔥🔥🔥🔥 -->
      {#if type === 'number'}<input
          id={name}
          {name}
          type="number"
          class="input"
          bind:value={input}
        />{/if}
      {#if type === 'date'}<input id={name} {name} type="date" class="input" value={input} />{/if}
      {#if type === 'email'}<input id={name} {name} type="email" class="input" value={input} />{/if}
      {#if type === 'tel'}<input id={name} {name} type="tel" class="input" value={input} />{/if}
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
