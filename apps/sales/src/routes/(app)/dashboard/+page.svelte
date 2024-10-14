<script lang="ts">
	import {
		Card,
		FlagIcon,
		GearIcon,
		InvoiceIcon,
		PageHeader,
		PersonIcon,
		PieChartIcon,
		TruckIcon
	} from '@repo/ui';
	import CustomersQuotesCard from '$lib/assets/images/CustomersQuotesCard.jpg';
	import SalesCard from '$lib/assets/images/SalesCard.jpg';
	import InvoicesCard from '$lib/assets/images/InvoicesCard.jpg';
	import SalesReportsCard from '$lib/assets/images/SalesReportsCard.jpg';
</script>

<PageHeader text="Dashboard" />
<div class="mb-4 flex flex-wrap gap-4">
	<Card src={SalesCard} headerText="Sales" icon={TruckIcon} url="/sales">
		<ul class="ml-4 list-disc">
			<li>Sell a TruckSuite Product to your Customers</li>
			<li>Explore My TruckSuiteProducts and Rates</li>
		</ul>
	</Card>
	<Card
		src={CustomersQuotesCard}
		headerText="Customers/Quotes"
		icon={PersonIcon}
		url="/customers-quotes"
	>
		<ul class="ml-4 list-disc">
			<li>Manage Customers & Trucks</li>
			<li>View Sales History</li>
			<li>View Quotes</li>
		</ul>
	</Card>
	<Card src={SalesReportsCard} headerText="Reports" icon={PieChartIcon} url="/reports">
		<ul class="ml-4 list-disc">
			<li>Run Reports on My Locations, Sales and more</li>
		</ul>
	</Card>
	<Card src={InvoicesCard} headerText="Invoices" icon={InvoiceIcon} url="/invoices">
		<ul class="ml-4 list-disc">
			<li>Manage My Invoices</li>
		</ul>
	</Card>
</div>
<a href="/quickstart" class="anchor">TruckSuite System - Quickstart Guide</a>
