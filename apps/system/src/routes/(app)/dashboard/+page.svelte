<script lang="ts">
	import { Card, FlagIcon, GearIcon, PageHeader, PersonIcon, PieChartIcon } from '@repo/ui';
	import CustomersCard from '$lib/assets/images/CustomersCard.jpg';
	import ProducersCard from '$lib/assets/images/ProducersCard.jpg';
	import AdminCard from '$lib/assets/images/AdminCard.jpg';
	import ReportsCard from '$lib/assets/images/ReportsCard.jpg';
	import { goto } from '$app/navigation';

	const goToESignaturePage = () => {
		goto('/esignature-request');
	};
</script>

<PageHeader text="Dashboard" />
<div
	class="mb-4 grid auto-cols-auto grid-flow-dense place-content-start gap-4"
	style:grid-template-columns="repeat(auto-fill, minmax(300px, max-content))"
>
	<Card src={ProducersCard} headerText="Producers" icon={FlagIcon} url="/producers">
		<ul class="ml-4 list-disc">
			<li>Create New Producers</li>
			<li>Manage Producer Accounts and Locations</li>
		</ul>
	</Card>
	<Card src={CustomersCard} headerText="Customers" icon={PersonIcon} url="/customers">
		<ul class="ml-4 list-disc">
			<li>Manage Customers & Trucks</li>
			<li>View Sales History</li>
			<li>View Quotes</li>
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
			<li>Manage Products</li>
			<li>Manage Sales Reps</li>
		</ul>
	</Card>
</div>
<div class="flex flex-col gap-2">
	<p class="font-semibold">Fill out a New Producer Agreement E-Signature Request Form</p>
	<div class="mb-4 flex items-center justify-between">
		<button class="btn btn-primary w flex" type="button" on:click={goToESignaturePage}
			>Go Now</button
		>
	</div>
</div>
<a href="/quickstart" class="anchor">TruckSuite System - Quickstart Guide</a>
