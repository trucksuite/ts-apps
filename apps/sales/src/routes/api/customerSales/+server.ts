import { client } from '@repo/db/client';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const publicId = url.searchParams.get('publicId');
	const searchTerm = url.searchParams.get('q');
	const limit = url.searchParams.get('_limit');
	const page = url.searchParams.get('_page');
	const orderBy = url.searchParams.get('_sort');
	const order = url.searchParams.get('_order');

	if (publicId) {
		const customer = await client.customerSale.findUnique({
			where: {
				publicId
			}
		});
		return json(customer);
	}

	const customers = await client.customerSale.findMany({
		where: {
			OR: [
				{
					customer: {
						lastName: {
							contains: searchTerm ?? ''
						}
					}
				},
				{
					truck: {
						vin: {
							contains: searchTerm ?? ''
						}
					}
				}
			]
		},
		skip: Number(page) > 1 ? (Number(page) - 1) * Number(limit) : 0,
		take: Number(limit),
		orderBy: {
			[(orderBy as string) ?? 'createdAt']: order ? order : 'asc'
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

	return json(customers);
};
