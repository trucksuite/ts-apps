import { client } from '@repo/db/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const count = await client.customerSale.count();
	const customerSales = await client.customerSale.findMany({
		include: {
			customer: true,
			truck: true,
			lienholder: true,
			selectedWarrantyProduct: {
				include: {
					termSelected: {
						include: {
							ratesPackage: true
						}
					},
					optionsSelected: {
						include: {
							optionsPackages: true
						}
					},
					locationWarrantyProduct: {
						include: {
							warrantyProduct: true
						}
					}
				}
			},
			customerSaleDownPayment: true,
			customerSaleInvoice: true,
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
