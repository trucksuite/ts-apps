<script lang="ts">
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  $: currentYear = getYear();
</script>

<div class="right-12 absolute bottom-0 w-full">
  <div class="flex justify-end items-center text-surface-500 py-2 text-xs">
    @{currentYear} TruckSuite, LLC - All Rights Reserved
  </div>
</div>
