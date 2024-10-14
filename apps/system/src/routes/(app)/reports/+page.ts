import type { PageLoad } from './$types';
import component from './Month.svelte';

export const load: PageLoad = async () => {
	return {
		component
	};
};
