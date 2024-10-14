import { client } from '@repo/db/client';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const count = await client.producer.count();
	const producers = await client.producer.findMany({
		include: {
			locations: true,
			truckSuiteSalesRepresentative: true
		}
	});

	if (!producers) throw error(404);

	console.log('producers:', producers);
	return {
		count,
		producers
	};
};
