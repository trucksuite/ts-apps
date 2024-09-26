<script lang="ts">
	import '@repo/config-ui-helpers/app.postcss';
	import { Header, Sidebar, PageWrapper } from '@repo/ui';
	import { AppShell } from '@skeletonlabs/skeleton';
	import bg from '$lib/assets/images/bg.jpg';

	import { page } from '$app/stores';
	let path: string;

	function getPath(currentPath: string) {
		path = currentPath;
		// console.log(path);
	}

	$: getPath($page.url.pathname);
</script>

<PageWrapper {path} {bg}>
	<div class="flex flex-col gap-4">
		<slot />
	</div>
</PageWrapper>

<!-- 
<div class="👇👇👇">
	<AppShell slotSidebarLeft="overflow-y-hidden border-r border-surface-500 bg-surface-100">
		<svelte:fragment slot="header"><Header type="system" /></svelte:fragment>
		<svelte:fragment slot="sidebarLeft"><Sidebar activePath={path} /></svelte:fragment>
		
		<slot />
		
		<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
		
	</AppShell>
</div> -->
