<script lang="ts">
	import { DisplayInput, PageHeader } from '@repo/ui';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ invoice } = data);
</script>

<PageHeader text="Invoice Details" />
<div class="flex flex-col gap-4">
	<div class="flex justify-between">
		<div class="flex flex-col gap-2">
			<DisplayInput label="Invoice Number" input={invoice?.publicId} />
			<DisplayInput label="Invoice Date" input={invoice?.createdAt} />
			<DisplayInput label="Due Date" input={invoice?.dueDate} />
			<DisplayInput label="Status" input={invoice?.invoiceStatus} />
			<DisplayInput label="Amount" input={invoice?.invoiceAmount.toLocaleString()} />
		</div>

		<!-- <div>
      <h3>Customer Details</h3>
      <div class="flex flex-col gap-2">
        <div>
          <span class="font-semibold">Customer Name:</span>
          <span>{invoice?.customer?.name}</span>
        </div>
        <div>
          <span class="font-semibold">Customer Email:</span>
          <span>{invoice?.customer?.email}</span>
        </div>
        <div>
          <span class="font-semibold">Customer Phone:</span>
          <span>{invoice?.customer?.phone}</span>
        </div>
      </div>
    </div> -->
	</div>
	<!-- <div>
    <h3>Invoice Items</h3>
    <table class="w-full">
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {#each invoice?.items as item}
          <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>{item.total}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div> -->
</div>
