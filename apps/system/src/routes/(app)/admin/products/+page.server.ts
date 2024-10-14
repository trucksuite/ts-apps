import { client } from '@repo/db/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const categories = await client.warrantyProductCategory.findMany({
		include: {
			warrantyProducts: true
		}
	});

	console.log('categories', categories);
	return {
		categories
	};
};
