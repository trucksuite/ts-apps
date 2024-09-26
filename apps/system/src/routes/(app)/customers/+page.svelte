<script lang="ts">
	import { reload } from '$lib/components/datatables/api';
	import ThSort from '$lib/components/datatables/ThSort.svelte';
	import { PageHeader } from '@repo/ui';
	import { DataHandler, type State } from '@vincjo/datatables/remote';

	import type { PageData } from './$types';
	import { browser } from '$app/environment';
	import { format } from 'date-fns';
	import Datatable from '$lib/components/datatables/Datatable.svelte';
	import { onMount } from 'svelte';

	export let data;

	$: ({ count, customerSales } = data);

	const handler = new DataHandler(customerSales, {
		rowsPerPage: 20,
		totalRows: count
	});
	const rows = handler.getRows();

	onMount(() => {
		handler.invalidate();
	});
	handler.onChange((state: State) => reload(state, 'customerSales'));
	$: if (customerSales) handler.invalidate();

	// $: mappedCustomersData = () =>
	// 	customerSales.map((customerSale) => {
	// 		return [
	// 			// customerSale.publicId,
	// 			// `${customerSale.firstName} ${customerSale.lastName}`,
	// 			// customerSale.createdAt,
	// 			// customerSale.trucks.map((truck) => truck.vin).join(', '),
	// 			// 'test products',
	// 			// 'test producer',
	// 			// 'test location'
	// 		];
	// 	});
</script>

<PageHeader text="Customers" />
<Datatable {handler}>
	<div class="table-container">
		<table class="table-interactive table-compact mb-4 table">
			<thead>
				<tr>
					<ThSort orderBy="lastName" {handler}>Customer</ThSort>
					<ThSort orderBy="createdAt" {handler}>Date Created</ThSort>
					<th>Vin</th>
					<th>Products</th>
					<th>Producer</th>
					<th>Location</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{#if browser}
					{#await $rows}
						<tr>
							<td colspan="3">Loading...</td>
						</tr>
					{:then $rows}
						{#if $rows.length === 0}
							<tr>
								<td colspan="3">No Customers Found</td>
							</tr>
						{:else}
							{#each $rows as customerSale}
								<tr>
									<td>
										<a href={`/customers/${customerSale.publicId}`}>
											<span class="flex items-center gap-2">
												{customerSale.customer.firstName}
												{customerSale.customer.lastName}
											</span>
										</a>
									</td>
									<td>
										<a href={`/customers/${customerSale.publicId}`}>
											<span class="flex items-center gap-2">
												{format(customerSale.createdAt, 'MM/dd/yyyy')}
											</span>
										</a>
									</td>
									<td>
										<a href={`/customers/${customerSale.publicId}`}>
											<div class="flex items-center overflow-hidden">
												<span class="gap-2 overflow-ellipsis whitespace-nowrap">
													{customerSale.truck.vin}
												</span>
											</div>
										</a>
									</td>
									<td>
										<a href={`/customers/${customerSale.publicId}`}>
											<span class="flex items-center gap-2">
												{customerSale.warrantyProductSelected.locationWarrantyProductAssigned
													.warrantyProduct.name}
											</span>
										</a>
									</td>
									<td>
										<a href={`/customers/${customerSale.publicId}`}>
											<div class="flex max-w-24 items-center overflow-hidden">
												<span class=" gap-2 overflow-hidden overflow-ellipsis whitespace-nowrap">
													{customerSale.producerLocation.producer?.name}
												</span>
											</div>
										</a>
									</td>
									<td>
										<a href={`/customers/${customerSale.publicId}`}>
											<div class="flex max-w-24 items-center overflow-hidden">
												<span class="  overflow-hidden overflow-ellipsis whitespace-nowrap"
													>{customerSale.producerLocation.name}</span
												>
											</div>
										</a>
									</td>

									<td class="flex items-center gap-4">
										<a
											class="text-primary-500 flex items-center"
											href={`/dashboard/customers/${customerSale.publicId}`}>View</a
										>
									</td>
								</tr>
							{/each}
						{/if}
					{/await}
				{/if}
			</tbody>
		</table>
	</div>
</Datatable>
