import { client } from '@repo/db/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	// console.log('url', url);
	// console.log('params', params);

	const invoiceId = parseFloat(params.id);

	const invoice = await client.customerSaleInvoice.findUnique({
		where: {
			id: invoiceId
		}
	});
	return {
		invoice
	};
};
