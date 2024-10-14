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
	import { producerStatus } from '@repo/utils/values';

	export let data;

	$: ({ count, producers } = data);

	const handler = new DataHandler(producers, {
		rowsPerPage: 20,
		totalRows: count
	});
	const rows = handler.getRows();

	onMount(() => {
		handler.invalidate();
	});
	handler.onChange((state: State) => reload(state, 'producers'));
	$: if (producers) handler.invalidate();
</script>

<PageHeader text="Producers" />
<div class="mb-4 flex items-center justify-between">
	<button class="btn btn-primary">Create New Producer</button>
</div>
<Datatable {handler} placeHolderText="Search by Producer Name or City...">
	<div class="table-container">
		<table class="table-interactive table-compact mb-4 table">
			<thead>
				<tr>
					<ThSort orderBy="lastName" {handler}>Producer</ThSort>
					<ThSort orderBy="createdAt" {handler}>Date Created</ThSort>
					<th># of Locations</th>
					<ThSort orderBy="city" {handler}>City</ThSort>
					<th>Primary Contact</th>
					<ThSort orderBy="status" {handler}>Status</ThSort>
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
								<td colspan="3">No Producers Found</td>
							</tr>
						{:else}
							{#each $rows as producer}
								<tr>
									<td>
										<a href={`/producers/${producer.publicId}`}>
											<span class="flex items-center gap-2">
												{producer.name}
											</span>
										</a>
									</td>
									<td>
										<a href={`/producers/${producer.publicId}}`}>
											<span class="flex items-center gap-2">
												{format(producer.createdAt, 'MM/dd/yyyy')}
											</span>
										</a>
									</td>
									<td>
										<a href={`/producers/${producer.publicId}}`}>
											<div class="flex items-center overflow-hidden">
												<span class="gap-2 overflow-ellipsis whitespace-nowrap">
													{producer.locations.length}
												</span>
											</div>
										</a>
									</td>
									<td>
										<a href={`/producers/${producer.publicId}}`}>
											<span class="flex items-center gap-2">
												{producer.city}
											</span>
										</a>
									</td>
									<td>
										<a href={`/producers/${producer.publicId}}`}>
											<div class="flex max-w-36 items-center overflow-hidden">
												<span class="gap-2 overflow-hidden overflow-ellipsis whitespace-nowrap">
													{producer.primaryContactName}
												</span>
											</div>
										</a>
									</td>
									<td>
										<a href={`/producers/${producer.publicId}}`}>
											<div class="flex items-center overflow-hidden">
												<span
													class="badge"
													class:producer-started={producer.status === 'STARTED'}
													class:producer-pending-review={producer.status === 'PENDING_REVIEW'}
													class:producer-active={producer.status === 'ACTIVE'}
													class:producer-inactive={producer.status === 'INACTIVE'}
													>{producerStatus[producer.status]}</span
												>
											</div>
										</a>
									</td>

									<td class="flex items-center gap-4">
										<a
											class="text-primary-500 flex items-center"
											href={`/producers/${producer.publicId}}`}>View</a
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
