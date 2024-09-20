<script lang="ts">
	import { Card, FlagIcon, GearIcon, PageHeader, PersonIcon, PieChartIcon } from '@repo/ui';
	import CustomersCard from '$lib/assets/images/CustomersCard.jpg';
	import ProducersCard from '$lib/assets/images/ProducersCard.jpg';
	import AdminCard from '$lib/assets/images/AdminCard.jpg';
	import ReportsCard from '$lib/assets/images/ReportsCard.jpg';
</script>

<PageHeader text="Dashboard" />
<div class="mb-4 flex flex-wrap gap-4">
	<Card src={CustomersCard} headerText="Customers" icon={PersonIcon} url="/customers">
		<ul class="ml-4 list-disc">
			<li>Manage Customers & Trucks</li>
			<li>View Sales History</li>
			<li>View Quotes</li>
		</ul>
	</Card>
	<Card src={ProducersCard} headerText="Producers" icon={FlagIcon} url="/producers">
		<ul class="ml-4 list-disc">
			<li>Create New Producers</li>
			<li>Manage Producer Accounts and Locations</li>
		</ul>
	</Card>
	<Card src={ReportsCard} headerText="Reports" icon={PieChartIcon} url="/reports">
		<ul class="ml-4 list-disc">
			<li>Run Reports on Producers, Locations, Sales and more</li>
		</ul>
	</Card>
	<Card src={AdminCard} headerText="Admin" icon={GearIcon} url="/admin">
		<ul class="ml-4 list-disc">
			<li>Manage Invoices & Credits</li>
			<li>Manage Sales Reps</li>
		</ul>
	</Card>
</div>
<a href="/quickstart" class="anchor">TruckSuite System - Quickstart Guide</a>
