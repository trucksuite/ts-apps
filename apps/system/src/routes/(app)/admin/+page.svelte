<script lang="ts">
	import { Card, FlagIcon, GearIcon, PageHeader, PersonIcon, PieChartIcon } from '@repo/ui';
	import CustomersCard from '$lib/assets/images/CustomersCard.jpg';
	import ProducersCard from '$lib/assets/images/ProducersCard.jpg';
	import AdminCard from '$lib/assets/images/AdminCard.jpg';
	import ReportsCard from '$lib/assets/images/ReportsCard.jpg';
</script>

<PageHeader text="Admin" />
<div
	class="mb-4 grid auto-cols-auto grid-flow-dense place-content-start gap-4"
	style:grid-template-columns="repeat(auto-fill, minmax(300px, max-content))"
>
	<Card
		src={CustomersCard}
		headerText="Agreements"
		icon={PersonIcon}
		url="/admin/signed-agreements"
	>
		<ul class="ml-4 list-disc">
			<li>View Signed Producer Agreements</li>
			<li>View Signed Warranty Agreements</li>
		</ul>
	</Card>
	<Card src={ProducersCard} headerText="Claims" icon={FlagIcon} url="/admin/claims">
		<ul class="ml-4 list-disc">
			<li>Manage Claims</li>
		</ul>
	</Card>
	<Card src={ReportsCard} headerText="Products" icon={PieChartIcon} url="/admin/products">
		<ul class="ml-4 list-disc">
			<li>Manage Products and Pricing</li>
			<li>Manage and Create Ratesheets</li>
		</ul>
	</Card>
	<Card src={AdminCard} headerText="Accounting" icon={GearIcon} url="/admin/accounting">
		<ul class="ml-4 list-disc">
			<li>Manage Invoices & Payments</li>
			<li>Issue Credits</li>
			<li>Create Miscellaneous Invoices</li>
		</ul>
	</Card>
	<Card src={AdminCard} headerText="Sales Reps" icon={GearIcon} url="/admin/sales-reps">
		<ul class="ml-4 list-disc">
			<li>Manage TS Sales Reps Data</li>
		</ul>
	</Card>
</div>
