<script lang="ts">
  import EditIcon from '../icons/Edit.svelte';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import { states_and_provinces } from './states_and_provinces';

  export let label: string = 'State';
  export let input: string | undefined;
  export let name: string = 'state';
  export let editMode: boolean = false;
  export let isEditable: boolean = false;

  $: status = 'static';

  const resetStatus = getContext<Writable<boolean>>('resetStatus');

  $: if ($resetStatus) {
    status = 'static';
    // $resetStatus = false;
  }
</script>

<div class="inline-flex flex-col justify-start items-start gap-1">
  <span class="flex gap-2">
    <div class="label">
      <span> {@html label} </span>
      {#if editMode && isEditable}
        <button class="text-primary-500" type="button" on:click={() => (status = 'editing')}>
          <svelte:component this={EditIcon} />
        </button>
      {/if}
    </div>
  </span>
  <div class="font-semibold">
    {#if status === 'static'}{@html input}{/if}
    {#if status === 'editing'}
      <input hidden type="text" name="key" value={name} />
      <select class="select" {name} value={input}>
        <option selected disabled>Select State</option>
        {#each states_and_provinces as state}
          <option value={state.abbreviation}>{state.name}</option>
        {/each}
      </select>
    {/if}
  </div>
</div>
