<script lang="ts">
	import { page } from '$app/stores';
	import type { WarrantyProductCategoryWithIncludes } from '@repo/utils/types';
	import { PageHeader } from '@repo/ui';

	export let data;

	$: ({ categories } = data);

	$: selectedCategory = categories[0];

	function selectCategory(category: WarrantyProductCategoryWithIncludes) {
		selectedCategory = category;
	}
</script>

<PageHeader text="Manage Warranty Products" />
<div class="flex justify-between">
	<div class="flex w-1/4 flex-col gap-4">
		<h3>Categories</h3>
		<div class=" flex flex-col gap-2">
			{#each categories as category}
				<button type="button" class="anchor text-left" on:click={() => selectCategory(category)}
					>{category.name}</button
				>
			{/each}
		</div>
		<button type="button" class="btn btn-primary">Add Category</button>
	</div>
	<div class="flex w-3/4 flex-col">
		<h3>Products</h3>
		{#each selectedCategory.warrantyProducts as product}
			<div>{product.name}</div>
		{/each}
	</div>
</div>
<h3>Categories</h3>

{#each categories as category}
	<div>{category.name}</div>
{/each}
<h3>Products</h3>
<h3>Ratesheets</h3>
