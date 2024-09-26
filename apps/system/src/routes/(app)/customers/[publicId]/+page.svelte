<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidate, invalidateAll } from '$app/navigation';
	import { CustomerSaleStatus } from '@prisma/client';
	import { CreateIcon, DisplayInput, Divider, PageHeader } from '@repo/ui';
	import { format } from 'date-fns';

	export let data;

	$: ({ customerSale } = data);
	$: editMode = false;
	let doneEditing = false;

	const resetEditing = () => {
		doneEditing = true;
	};
</script>

{#if customerSale}
	<form
		use:enhance={() => {
			return async ({ result, update }) => {
				if (result.type === 'success') {
					editMode = false;
					resetEditing();
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
			{#if !editMode}
				<button type="button" class="btn btn-primary" on:click={() => (editMode = true)}
					>Edit Customer Info</button
				>
			{/if}
			{#if editMode}
				<button class="btn btn-primary" type="submit">Save Changes</button>
			{/if}
		</div>
		<div class="flex flex-col gap-8">
			<div class="flex justify-start gap-16">
				<DisplayInput
					isEditable={true}
					{editMode}
					{doneEditing}
					name="firstName"
					label="First Name"
					input={customerSale?.customer.firstName}
				/>

				<DisplayInput label="Last Name" input={customerSale?.customer.lastName} />
			</div>
			<div class="flex justify-start gap-16">
				<DisplayInput label="Id" input={customerSale?.publicId} />
				<DisplayInput label="Date Created" input={format(customerSale?.createdAt, 'MM/dd/yyyy')} />
			</div>
			<div class="flex justify-start gap-16">
				<DisplayInput
					label="Address"
					input={`
      ${customerSale?.customer.address}<br />
      ${customerSale?.customer.city}, ${customerSale?.customer.state} ${customerSale?.customer.zip}<br />
      ${customerSale?.customer.country}
      `}
				/>
				<DisplayInput label="Email" input={customerSale?.customer.email} />
				<DisplayInput label="Phone" input={customerSale?.customer.phone} />
			</div>
		</div>
	</form>
	<div class="flex flex-col gap-8">
		<div class="flex justify-start gap-16">
			<DisplayInput label="Producer" input={customerSale?.producer.name} />
			<DisplayInput label="Location" input={customerSale?.producerLocation.name} />
		</div>
		<Divider />
		<h4>Truck Lienholder Info</h4>
		<div class="flex justify-start gap-16">
			<DisplayInput label="Lienholder Name" input={customerSale?.lienholder?.name} />
		</div>
		<Divider />
		<h4>Truck Info</h4>
		<div class="flex justify-start gap-16">
			<DisplayInput label="Vin" input={customerSale?.truck.vin} />
		</div>
		<div class="flex justify-start gap-16">
			<DisplayInput
				label="Year/Make/Model"
				input={`${String(customerSale?.truck.year)} ${customerSale?.truck.make} ${customerSale?.truck.model}`}
			/>
			<DisplayInput
				label="Odometer"
				input={`${String(customerSale?.truck.odometer.toLocaleString())} ${customerSale?.truck.odometerUnit}`}
			/>
			<DisplayInput
				label="ECM"
				input={`${String(customerSale?.truck.ecm.toLocaleString())} ${customerSale?.truck.ecmUnit}`}
			/>
		</div>
		<div class="flex justify-start gap-16">
			<DisplayInput label="Engine Make/Model" input={customerSale?.truck.engineMakeModel} />
			<DisplayInput label="Engine Serial Num" input={customerSale?.truck.engineSerialNum} />
		</div>
		<div class="flex justify-start gap-16">
			<DisplayInput label="GVWR" input={customerSale?.truck.gvwr} />
			<DisplayInput label="Vehicle Type" input={customerSale?.truck.vehicleType} />
			<DisplayInput label="Fuel Type" input={customerSale?.truck.fuelType} />
		</div>
		<div class="flex justify-start gap-16">
			<DisplayInput label="Apu Make" input={String(customerSale?.truck.apuMake)} />
			<DisplayInput label="Apu Serial Num" input={String(customerSale?.truck.apuSerialNum)} />
			<DisplayInput label="Apu Hours" input={String(customerSale?.truck.apuHours)} />
		</div>
		<Divider />
		<div class="flex justify-start gap-16">
			<div></div>
		</div>

		<h4>Product Info</h4>
		<div class="flex items-center justify-start gap-16">
			<DisplayInput
				label="Warranty Product"
				input={customerSale?.warrantyProductSelected.locationWarrantyProductAssigned.warrantyProduct
					.name}
			/>
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
		<div class="flex items-center justify-start gap-16">
			<DisplayInput
				label="Term Selected"
				input={`${customerSale?.warrantyProductSelected.termSelected?.warrantyTerm.termValue} ${customerSale?.warrantyProductSelected.termSelected?.warrantyTerm.termUnit}`}
			/>
			<DisplayInput
				label="Options Selected"
				input={`${customerSale?.warrantyProductSelected.optionsSelected.map((option) => {
					// console.log('option p', option);
					return option.warrantyOptions.map((option) => {
						// console.log('option c', option);
						return ` ${option.name}`;
					});
				})}`}
			/>
		</div>
		<div class="flex justify-start gap-16">
			<DisplayInput
				label="Quoted Sale Price"
				input={`$${customerSale?.quotedSalePrice.toLocaleString()} ${customerSale?.saleCurrency}`}
			/>
			<DisplayInput
				label="Final Retail Purchase Price"
				input={`$${customerSale?.finalRetailWarrantyPurchasePrice.toLocaleString()} ${customerSale?.saleCurrency}`}
			/>
		</div>
		<Divider />
		<div class="flex w-full flex-col justify-start gap-4">
			<h4>Notes</h4>
			<textarea class="textarea" placeholder="Add a note..."></textarea>
			{#each customerSale?.notes as note}
				<div class="flex gap-2">
					<svelte:component this={CreateIcon} />
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
{/if}
