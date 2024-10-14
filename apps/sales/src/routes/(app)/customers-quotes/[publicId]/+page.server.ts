import { client } from '@repo/db/client';
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
		const names = formData.getAll('key') as string[];
		const values = names.map((name) => formData.get(name) as string);
		console.log('🔥 names', names);
		console.log('🔥 values', values);

		const formattedValues = values.reduce(
			(acc, value, index) => {
				acc[names[index]] = value;
				return acc;
			},
			{} as Record<string, string>
		);

		console.log('🔥 formattedValues', formattedValues);

		const customer = await client.customer.update({
			where: {
				publicId: customerId
			},
			data: formattedValues
		});

		return { customer };
	},
	saveTruckInfo: async (event) => {
		const { publicId } = event.params;
		const formData = await event.request.formData();

		console.log('publicId', publicId);
		console.log('🔥 formData', formData);

		const truckId = formData.get('publicId') as string;
		const names = formData.getAll('key') as string[];
		const values = names.map((name) => formData.get(name));
		console.log('🔥 names', names);
		console.log('🔥 values', values);

		const formattedValues = values.reduce(
			(acc, value, index) => {
				acc[names[index]] = value;
				return acc;
			},
			{} as Record<string, unknown>
		);

		console.log('🔥 formattedValues', formattedValues);

		const truck = await client.truck.update({
			where: {
				publicId: truckId
			},
			data: formattedValues
		});

		return { truck };
	},
	saveTruckLienholderInfo: async (event) => {
		const { publicId } = event.params;
		const formData = await event.request.formData();

		console.log('publicId', publicId);
		console.log('🔥 formData', formData);

		const truckLienholderId = formData.get('publicId') as string;
		const names = formData.getAll('key') as string[];
		const values = names.map((name) => formData.get(name));
		console.log('🔥 names', names);
		console.log('🔥 values', values);

		const formattedValues = values.reduce(
			(acc, value, index) => {
				acc[names[index]] = value;
				return acc;
			},
			{} as Record<string, unknown>
		);

		console.log('🔥 formattedValues', formattedValues);

		const truckLienholder = await client.truckLienholder.update({
			where: {
				publicId: truckLienholderId
			},
			data: formattedValues
		});

		return { truckLienholder };
	}
};
