import { client } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const count = await client.customerSale.count();
	const customerSales = await client.customerSale.findMany({
		include: {
			customer: true,
			truck: true,
			lienholder: true,
			warrantyProductSelected: {
				include: {
					termSelected: {
						include: {
							warrantyTerm: true
						}
					},
					optionsSelected: {
						include: {
							warrantyOptions: true
						}
					},
					locationWarrantyProductAssigned: {
						include: {
							warrantyProduct: true
						}
					}
				}
			},
			customerSaleDownPayment: true,
			customerSaleInvoice: true,
			signedAgreement: true,
			producer: true,
			producerLocation: {
				include: {
					producer: true
				}
			},
			producerAdmin: true,
			notes: true
		}
	});

	// console.log('customerSales', customerSales);
	return { count, customerSales };
};
