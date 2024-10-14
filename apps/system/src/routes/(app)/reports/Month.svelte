<script lang="ts">
	import { format } from 'date-fns';

	export let selectedDate = `${format(new Date(), 'MMMM')} ${new Date().getFullYear()}`;
</script>

<span>{selectedDate}</span>
