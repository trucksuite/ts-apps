<script lang="ts">
	import type { DataHandler } from '@vincjo/datatables/remote';
	export let handler: DataHandler;
	let value: string;
	let timeout: any;
	export let placeHolderText: string;

	const search = () => {
		handler.search(value);
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			handler.invalidate();
		}, 400);
	};
</script>

<input
	class="input-variant-secondary input w-36 sm:w-72"
	type="search"
	placeholder={placeHolderText}
	bind:value
	on:input={search}
/>
