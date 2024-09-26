import { client } from '$lib/server/prisma';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, depends }) => {
	const customerSale = await client.customerSale.findUnique({
		where: {
			publicId: params.publicId
		},
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

	depends('data:customerSale');
	return { customerSale };
};

export const actions: Actions = {
	saveCustomerInfo: async (event) => {
		const { publicId } = event.params;
		const formData = await event.request.formData();

		console.log('publicId', publicId);
		console.log('🔥 formData', formData);

		const customerId = formData.get('publicId') as string;
		const name = formData.get('key') as string;
		const value = formData.get(name) as string;
		console.log('🔥 name', name);
		console.log('🔥 value', value);

		const customer = await client.customer.update({
			where: {
				publicId: customerId
			},
			data: {
				// firstName: undefined,
				// lastName: undefined,
				// email: undefined,
				// phone: undefined,
				// address: undefined,
				// city: undefined,
				// state: undefined,
				// zip: undefined,
				// country: undefined,

				[name]: value
			}
		});

		return { customer };
	}
};
