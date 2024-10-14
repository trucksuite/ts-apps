<script lang="ts">
	import { Footer, Header, LogoSalesPortalLg } from '@repo/ui';
	import bg from '$lib/assets/images/bg.jpg';
	import welcomeBg from '$lib/assets/images/welcome-bg.jpg';
	import { goto } from '$app/navigation';
</script>

<div class="flex h-full w-full flex-col bg-cover" style={`background-image: url('${bg}')`}>
	<div class="flex h-full w-full flex-col overflow-hidden">
		<Header type="sales" />
		<div class="flex h-full w-full flex-auto overflow-hidden">
			<div
				class="relative flex flex-1 flex-col items-center justify-center overflow-x-hidden px-24 py-12"
				style="scrollbar-gutter: auto;"
			>
				<div
					class="flex h-full w-full flex-col items-center justify-center rounded-lg bg-cover bg-bottom bg-no-repeat shadow-lg"
					style={`background-image: url('${welcomeBg}')`}
				>
					<div
						class="bg-surface-100 box-border flex h-auto w-auto flex-col items-center justify-center gap-2 rounded-lg bg-opacity-90 px-20 py-10"
					>
						<LogoSalesPortalLg />
						<button type="button" class="btn-primary shadow-xl" on:click={() => goto('/dashboard')}
							>Enter</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
