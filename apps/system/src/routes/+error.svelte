<script>
	import { page } from '$app/stores';
	import { PageHeader, PageWrapper } from '@repo/ui';
	import bg from '$lib/assets/images/bg.jpg';
</script>

<PageWrapper path="" {bg} type="system">
	<div class="flex flex-col gap-4">
		<PageHeader text="Something Unexpected Happened" />
		<h2>Code: {$page.status}</h2>
		<h3 class="text-error-500">
			{$page.error?.message}
		</h3>
	</div>
</PageWrapper>
