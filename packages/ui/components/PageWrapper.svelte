<script lang="ts">
  import { AppShell } from '@skeletonlabs/skeleton';
  import Header from './Header.svelte';
  import Sidebar from './Sidebar.svelte';
  import Footer from './Footer.svelte';

  export let path: string;
  export let bg: string;

  console.log('🥶', path, bg);
</script>

<div class="flex flex-col w-full h-full bg-cover" style={`background-image: url('${bg}')`}>
  <AppShell
    regionPage="p-12 flex items-center justify-center relative"
    slotPageContent="p-4 bg-surface-100 rounded-lg border border-surface-500 flex flex-col w-full h-full shadow-lg overflow-y-scroll"
    slotSidebarLeft="overflow-y-hidden border-r border-surface-500 bg-surface-100"
  >
    <svelte:fragment slot="header"><Header type="system" /></svelte:fragment>
    <svelte:fragment slot="sidebarLeft"><Sidebar activePath={path} /></svelte:fragment>
    <slot />
    <svelte:fragment slot="pageFooter"><Footer /></svelte:fragment>
  </AppShell>
</div>
