<script lang="ts">
	import { PageHeader } from '@repo/ui';

	export let data: any;

	$: customers = data.customers;
</script>

<PageHeader text="Customers" />

{#if customers}
	{#each customers as customer}
		<p>{customer.firstName}</p>
	{/each}
{/if}
