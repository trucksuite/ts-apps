import { client } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const customers = await client.customer.findMany();

	console.log(customers);
	return { customers };
};
