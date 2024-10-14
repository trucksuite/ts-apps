<script lang="ts">
	import { page } from '$app/stores';
	import { PageHeader } from '@repo/ui';
	import { format } from 'date-fns';
	import Month from './Month.svelte';

	export let data;

	$: ({ component } = data);

	let label = 'All Producers';

	$: console.log(data);
	$: console.log($page);

	let selectedDate = `${format(new Date(), 'MMMM')} ${new Date().getFullYear()}`;
</script>

<div class="flex gap-2">
	<h2>
		Reports -
		<Month {selectedDate} />
	</h2>
</div>
<div class="flex items-end justify-between">
	<h3>Quick View - {label}</h3>
	<div class="flex flex-col gap-1">
		<label class="label" for="month">Month/Year</label>
		<select class="select" bind:value={selectedDate}>
			<option value="October 2024">October 2024</option>
			<option value="September 2024">September 2024</option>
			<option value="August 2024">August 2024</option>
			<option value="July 2024">July 2024</option>
		</select>
	</div>
</div>
<div class="border-secondary-300 flex flex-col gap-8 rounded-lg border-2 p-6 xl:flex-row">
	<div class="flex w-full flex-col gap-16 xl:w-3/5">
		<div class="flex justify-start gap-24">
			<div class="flex flex-col gap-2">
				<h3>Total Sales</h3>
				<h1>$41,000</h1>
			</div>
			<div class="flex flex-col gap-2">
				<h3>VSCs Sold</h3>
				<h1>124</h1>
			</div>
		</div>
		<div class="flex justify-start gap-24">
			<div class="flex flex-col gap-2">
				<h3>Invoices Paid</h3>
				<h1>$15,000</h1>
			</div>
			<div class="flex flex-col gap-2">
				<h3>Claims Paid</h3>
				<h1>$10,000</h1>
			</div>
		</div>
	</div>
	<div class="flex w-full flex-col gap-4 xl:w-2/5">
		<h3>Top 5 Producers</h3>
		<span class="inline-flex items-center justify-between gap-4"
			><h4 class="filler overflow-hidden whitespace-nowrap">Velocity Vehicle Group</h4>
			<p class="flex-shrink-0 text-xl font-semibold">100 VSCs</p></span
		>
		<span class="inline-flex items-center justify-between gap-4"
			><h4 class="filler overflow-hidden whitespace-nowrap">Bruckner's Trucks</h4>
			<p class="flex-shrink-0 text-xl font-semibold">100 VSCs</p></span
		>
		<span class="inline-flex items-center justify-between gap-4"
			><h4 class="filler overflow-hidden whitespace-nowrap">CTE Services</h4>
			<p class="flex-shrink-0 text-xl font-semibold">100 VSCs</p></span
		>
		<span class="inline-flex items-center justify-between gap-4"
			><h4 class="filler overflow-hidden whitespace-nowrap">Custom Trucks Equipment</h4>
			<p class="flex-shrink-0 text-xl font-semibold">100 VSCs</p></span
		>
		<span class="inline-flex items-center justify-between gap-4"
			><h4 class="filler overflow-hidden whitespace-nowrap">Jackson Peterbilt</h4>
			<p class="flex-shrink-0 text-xl font-semibold">100 VSCs</p></span
		>
	</div>
</div>

<div class="flex flex-col">
	<h3>See Detailed Reports</h3>
	<span class="inline-flex gap-4">
		<a class="anchor" href="/reports/producers">Producers </a>🚛
	</span>
	<span class="inline-flex gap-4">
		<a class="anchor" href="/reports/accounting">Accounting </a>💰
	</span>
	<span class="inline-flex gap-4">
		<a class="anchor" href="/reports/sales-reps">Sales Reps </a>👩‍💼
	</span>
</div>

<style>
	.filler:after {
		content: ' ................................................................................................................................................................................................................................................................................................................................................................................................................................................';
		color: #555555;
		font-size: 14px;
	}
</style>
