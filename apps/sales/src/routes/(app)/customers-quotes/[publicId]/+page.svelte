<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidate, invalidateAll } from '$app/navigation';
	import { CustomerSaleStatus } from '@prisma/client';
	import { CustomerSaleNoteType } from '@prisma/client';
	import {
		CreateIcon,
		TerminatedIcon,
		DeleteIcon,
		CancelIcon,
		AlarmIcon,
		EditIcon,
		DisplayInput,
		Divider,
		PageHeader,
		StateSelect
	} from '@repo/ui';
	import { customerSaleNoteType } from '@repo/utils/values';
	import { format } from 'date-fns';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let data;
	export const resetStatus = writable<boolean>(false);
	setContext('resetStatus', resetStatus);

	$: ({ customerSale } = data);

	$: console.log('customerSale', customerSale);
	$: editCustomerMode = false;
	$: editTruckLienholderMode = false;
	$: editTruckMode = false;
</script>

{#if customerSale}
	<form
		use:enhance={() => {
			$resetStatus = false;
			return async ({ result, update }) => {
				if (result.type === 'success') {
					editCustomerMode = false;
					$resetStatus = true;
					invalidate('data:customerSale');
				} else {
					update();
				}
			};
		}}
		method="POST"
		action="?/saveCustomerInfo"
	>
		<input hidden type="text" name="publicId" value={customerSale?.customer.publicId} />

		<div class="flex justify-between">
			<PageHeader text={`${customerSale?.customer.firstName} ${customerSale?.customer.lastName}`} />

			<div class="flex flex-col items-end gap-1">
				{#if !editCustomerMode}
					<button type="button" class="btn btn-primary" on:click={() => (editCustomerMode = true)}
						>Edit Customer Info</button
					>
				{/if}
				{#if editCustomerMode}
					<button class="btn btn-primary" type="submit">Save Changes</button>
				{/if}
			</div>
		</div>

		<div class="flex flex-col gap-8">
			<div class="flex justify-start gap-16">
				<DisplayInput
					isEditable={true}
					editMode={editCustomerMode}
					name="firstName"
					label="First Name"
					input={customerSale?.customer.firstName}
				/>

				<DisplayInput
					isEditable={true}
					editMode={editCustomerMode}
					name="lastName"
					label="Last Name"
					input={customerSale?.customer.lastName}
				/>
			</div>
			<div class="flex justify-start gap-16">
				<DisplayInput
					isEditable={true}
					editMode={editCustomerMode}
					name="email"
					type="email"
					label="Email"
					input={customerSale?.customer.email}
				/>
				<DisplayInput
					isEditable={true}
					editMode={editCustomerMode}
					name="phone"
					type="tel"
					label="Phone"
					input={customerSale?.customer.phone}
				/>
			</div>
			<div class="flex justify-start gap-16">
				<DisplayInput
					isEditable={true}
					editMode={editCustomerMode}
					name="address"
					label="Address"
					input={`${customerSale?.customer.address}`}
				/>
				<DisplayInput
					isEditable={true}
					editMode={editCustomerMode}
					name="city"
					label="City"
					input={`${customerSale?.customer.city}`}
				/>
				<StateSelect
					isEditable={true}
					editMode={editCustomerMode}
					input={`${customerSale?.customer.state}`}
				/>
				<DisplayInput
					isEditable={true}
					editMode={editCustomerMode}
					name="zip"
					label="Zip"
					input={`${customerSale?.customer.zip}`}
				/>
				<DisplayInput
					isEditable={true}
					editMode={editCustomerMode}
					name="country"
					label="Country"
					input={`${customerSale?.customer.country}`}
				/>
			</div>
		</div>
	</form>
	<Divider />
	<form
		use:enhance={() => {
			$resetStatus = false;
			return async ({ result, update }) => {
				if (result.type === 'success') {
					editTruckMode = false;
					$resetStatus = true;
					invalidate('data:customerSale');
				} else {
					update();
				}
			};
		}}
		method="POST"
		action="?/saveTruckInfo"
	>
		<input hidden type="text" name="publicId" value={customerSale?.truck.publicId} />
		<div class="flex justify-between">
			<h4>Truck Info</h4>
			<div class="flex flex-col items-end gap-1">
				{#if !editTruckMode}
					<button type="button" class="btn btn-primary" on:click={() => (editTruckMode = true)}
						>Edit Truck Info</button
					>
				{/if}
				{#if editTruckMode}
					<button class="btn btn-primary" type="submit">Save Changes</button>
				{/if}
			</div>
		</div>
		<div class="flex flex-col gap-8">
			<div class="flex justify-start gap-16">
				<DisplayInput
					isEditable={true}
					editMode={editTruckMode}
					name="vin"
					label="Vin"
					input={customerSale?.truck.vin}
				/>
			</div>
			<div class="flex justify-start gap-16">
				<DisplayInput
					isEditable={true}
					editMode={editTruckMode}
					name="year"
					label="Year"
					input={customerSale?.truck.year}
				/>
				<DisplayInput
					isEditable={true}
					editMode={editTruckMode}
					name="make"
					label="Make"
					input={`${customerSale?.truck.make}`}
				/>
				<DisplayInput
					isEditable={true}
					editMode={editTruckMode}
					name="model"
					label="Model"
					input={`${customerSale?.truck.model}`}
				/>
			</div>
			<div class="flex justify-start gap-16">
				<DisplayInput
					isEditable={true}
					editMode={editTruckMode}
					name="odometer"
					type="number"
					label={`Odometer (${customerSale?.truck.odometerUnit})`}
					input={customerSale?.truck.odometer.toLocaleString()}
				/>
				<DisplayInput
					isEditable={true}
					editMode={editTruckMode}
					name="ecm"
					type="number"
					label={`ECM (${customerSale?.truck.ecmUnit})`}
					input={customerSale?.truck.ecm.toLocaleString()}
				/>
			</div>
			<div class="flex justify-start gap-16">
				<DisplayInput
					isEditable={true}
					editMode={editTruckMode}
					name="engineMakeModel"
					label="Engine Make/Model"
					input={customerSale?.truck.engineMakeModel}
				/>
				<DisplayInput
					isEditable={true}
					editMode={editTruckMode}
					name="engineSerialNum"
					label="Engine Serial Num"
					input={customerSale?.truck.engineSerialNum}
				/>
			</div>
			<div class="flex justify-start gap-16">
				<DisplayInput
					isEditable={true}
					editMode={editTruckMode}
					name="gvwr"
					label="GVWR"
					input={customerSale?.truck.gvwr}
				/>
				<DisplayInput
					isEditable={true}
					editMode={editTruckMode}
					name="vehicleType"
					label="Vehicle Type"
					input={customerSale?.truck.vehicleType}
				/>
				<DisplayInput
					isEditable={true}
					editMode={editTruckMode}
					name="fuelType"
					label="Fuel Type"
					input={customerSale?.truck.fuelType}
				/>
			</div>
			<div class="flex justify-start gap-16">
				<DisplayInput
					isEditable={true}
					editMode={editTruckMode}
					name="apuMake"
					label="Apu Make"
					input={String(customerSale?.truck.apuMake)}
				/>
				<DisplayInput
					isEditable={true}
					editMode={editTruckMode}
					name="apuSerialNum"
					label="Apu Serial Num"
					input={String(customerSale?.truck.apuSerialNum)}
				/>
				<DisplayInput
					isEditable={true}
					editMode={editTruckMode}
					name="apuHours"
					label="Apu Hours"
					input={parseFloat(String(customerSale?.truck.apuHours)).toLocaleString()}
				/>
			</div>
		</div>
	</form>
	{#if customerSale?.lienholder}
		<Divider />
		<form
			use:enhance={() => {
				$resetStatus = false;
				return async ({ result, update }) => {
					if (result.type === 'success') {
						editTruckLienholderMode = false;
						$resetStatus = true;
						invalidate('data:customerSale');
					} else {
						update();
					}
				};
			}}
			method="POST"
			action="?/saveTruckLienholderInfo"
		>
			<input hidden type="text" name="publicId" value={customerSale?.lienholder?.publicId} />
			<div class="flex justify-between">
				<h4>Truck Lienholder Info</h4>
				<div class="flex flex-col items-end gap-1">
					{#if !editTruckLienholderMode}
						<button
							type="button"
							class="btn btn-primary"
							on:click={() => (editTruckLienholderMode = true)}>Edit Truck Lienholder Info</button
						>
					{/if}
					{#if editTruckLienholderMode}
						<button class="btn btn-primary" type="submit">Save Changes</button>
					{/if}
				</div>
			</div>
			<div class="flex flex-col gap-8">
				<div class="flex justify-start gap-16">
					<DisplayInput
						isEditable={true}
						editMode={editTruckLienholderMode}
						name="name"
						label="Lienholder Name"
						input={customerSale?.lienholder?.name}
					/>
				</div>
				<div class="flex justify-start gap-16">
					<DisplayInput
						isEditable={true}
						editMode={editTruckLienholderMode}
						name="email"
						label="Email"
						input={customerSale?.lienholder?.email}
					/>
					<DisplayInput
						isEditable={true}
						editMode={editTruckLienholderMode}
						name="phone"
						label="Phone"
						input={customerSale?.lienholder?.phone}
					/>
				</div>
				<div class="flex justify-start gap-16">
					<DisplayInput
						isEditable={true}
						editMode={editTruckLienholderMode}
						name="address"
						label="Address"
						input={`${customerSale?.lienholder?.address}`}
					/>
					<DisplayInput
						isEditable={true}
						editMode={editTruckLienholderMode}
						name="city"
						label="City"
						input={`${customerSale?.lienholder?.city}`}
					/>
					<StateSelect
						isEditable={true}
						editMode={editTruckLienholderMode}
						input={`${customerSale?.lienholder?.state}`}
					/>
					<DisplayInput
						isEditable={true}
						editMode={editTruckLienholderMode}
						name="zip"
						label="Zip"
						input={`${customerSale?.lienholder?.zip}`}
					/>
					<DisplayInput
						isEditable={true}
						editMode={editTruckLienholderMode}
						name="country"
						label="Country"
						input={`${customerSale?.lienholder?.country}`}
					/>
				</div>
			</div>
		</form>
	{/if}
	<Divider />
	<h4>Product Info</h4>
	<div class="flex flex-col gap-8">
		<div class="flex items-center justify-start gap-16">
			<DisplayInput
				label="Warranty Product"
				input={customerSale?.selectedWarrantyProduct.locationWarrantyProduct.warrantyProduct.name}
			/>
			<DisplayInput
				label="Fuel Type"
				input={customerSale?.selectedWarrantyProduct.locationWarrantyProduct.warrantyProduct
					.fuelType}
			/>

			<div class="flex items-center justify-start gap-16">
				<DisplayInput
					label="Term Selected"
					input={`${customerSale?.selectedWarrantyProduct.termSelected?.ratesPackage.termValue} ${customerSale?.selectedWarrantyProduct.termSelected?.ratesPackage.termUnit}`}
				/>
				<DisplayInput
					label="Options Selected"
					input={`${customerSale?.selectedWarrantyProduct.optionsSelected.map((option) => {
						// console.log('option p', option);
						return option.optionsPackages.map((option) => {
							// console.log('option c', option);
							return ` ${option.type}`;
						});
					})}`}
				/>
			</div>
		</div>

		<div class="flex justify-start gap-16">
			<span class="flex items-end gap-2">
				<DisplayInput
					label={`Date ${customerSale?.customerSaleStatus === CustomerSaleStatus?.QUOTE ? 'Quoted' : 'Sold'}`}
					input={customerSale?.saleDate ? format(customerSale?.saleDate, 'MM/dd/yyyy') : ''}
				/>
				{#if customerSale?.financedDeal}
					<span class="badge financed">Financed</span>
				{/if}
				{#if customerSale?.customerSaleStatus === CustomerSaleStatus?.COMPLETED}
					<span class="badge sale-complete">Completed</span>
				{/if}
				{#if customerSale?.customerSaleStatus === CustomerSaleStatus?.IN_PROGRESS}
					<span class="badge sale-in-progress">In Progress</span>
				{/if}
				{#if customerSale?.customerSaleStatus === CustomerSaleStatus?.DECLINED}
					<span class="badge sale-declined">Declined</span>
				{/if}
				{#if customerSale?.customerSaleStatus === CustomerSaleStatus?.QUOTE}
					<span class="badge sale-quote">Quote</span>
				{/if}
			</span>

			<span class="flex items-end gap-2">
				<DisplayInput
					label="Expiration Date"
					input={customerSale?.expirationDate
						? format(customerSale?.expirationDate, 'MM/dd/yyyy')
						: ''}
				/>
				{#if customerSale?.expirationDate && customerSale?.expirationDate?.getTime() < new Date().getTime()}
					<span class="badge contract-expired">Expired</span>
				{/if}
			</span>
		</div>
		<div class="flex justify-start gap-16">
			<DisplayInput
				label="Quoted Sale Price"
				type="number"
				input={`$${customerSale?.quotedSalePrice.toLocaleString()} ${customerSale?.saleCurrency}`}
			/>
			<DisplayInput
				label="Final Retail Purchase Price"
				type="number"
				input={`$${customerSale?.finalRetailWarrantyPurchasePrice.toLocaleString()} ${customerSale?.saleCurrency}`}
			/>
			<a href={`/admin/accounting/invoices/${customerSale?.customerSaleInvoiceId}`} class="anchor"
				>View Invoice</a
			>
		</div>
	</div>
	<Divider />
	<div class="flex flex-col gap-8">
		<div class="flex w-full flex-col justify-start gap-4">
			<h4>Notes</h4>
			<textarea class="textarea" placeholder="Add a note..."></textarea>
			{#each customerSale?.notes as note}
				<div class="flex gap-2">
					{#if note.type === customerSaleNoteType.CREATED}
						<svelte:component this={CreateIcon} />
					{/if}
					{#if note.type === customerSaleNoteType.TERMINATED}
						<svelte:component this={TerminatedIcon} />
					{/if}
					{#if note.type === customerSaleNoteType.VOIDED}
						<svelte:component this={DeleteIcon} />
					{/if}
					{#if note.type === customerSaleNoteType.CANCELLED}
						<svelte:component this={CancelIcon} />
					{/if}
					{#if note.type === customerSaleNoteType.EXPIRED}
						<svelte:component this={AlarmIcon} />
					{/if}
					{#if note.type === customerSaleNoteType.MANUAL}
						<svelte:component this={EditIcon} />
					{/if}

					<div class="flex flex-col gap-2">
						<span class="text-sm">{note?.note}</span>
						<span class="text-sm font-semibold"
							>{format(note?.createdAt, 'MM/dd/yyyy - hh:mm:ss a ')}</span
						>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<br />
	<div class="flex flex-col gap-1">
		<div class="flex gap-4">
			<div class="text-xs">
				Customer Id: <span class="font-semibold">{customerSale?.publicId}</span>
			</div>
			<div class="text-xs">
				Date Created: <span class="font-semibold"
					>{format(customerSale?.createdAt, 'MM/dd/yyyy')}</span
				>
			</div>
			<div class="text-xs">
				Last Updated: <span class="font-semibold"
					>{format(customerSale?.updatedAt, 'MM/dd/yyyy')}</span
				>
			</div>
		</div>
		<div class="flex gap-4">
			<div class="text-xs">
				Producer: <span class="font-semibold">{customerSale?.producer.name}</span>
			</div>
			<div class="text-xs">
				Location: <span class="font-semibold">{customerSale?.producerLocation.name}</span>
			</div>
		</div>
	</div>
{/if}
