<script lang="ts">
  import LogoSalesPortal from './logos/LogoSalesPortal.svelte';
  import LogoSystem from './logos/LogoSystem.svelte';

  export let type = 'system';
</script>

<div class="relative z-10 flex items-center justify-between bg-surface-100 shadow-md p-4">
  <div class="flex items-center">
    <a href="/" class="w-full">
      {#if type === 'system'}
        <svelte:component this={LogoSystem} />
      {/if}
      {#if type === 'sales'}
        <svelte:component this={LogoSalesPortal} />
      {/if}
    </a>
  </div>
  <div class="flex items-center">
    <a href="/auth/login" class="text-blue-500">Login</a>
    <a href="/auth/register" class="ml-4 text-blue-500">Register</a>
  </div>
</div>
