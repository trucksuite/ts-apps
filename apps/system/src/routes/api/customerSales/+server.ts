import { client } from '$lib/server/prisma';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
	const publicId = url.searchParams.get('publicId');
	const searchTerm = url.searchParams.get('q');
	const limit = url.searchParams.get('_limit');
	const page = url.searchParams.get('_page');
	const orderBy = url.searchParams.get('_sort');
	const order = url.searchParams.get('_order');
	const salesRepId = url.searchParams.get('salesRepId');

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
			...(salesRepId ? { tsSalesRepId: salesRepId } : {}),
			customer: {
				OR: [
					{
						firstName: {
							contains: searchTerm ?? ''
						}
					},
					{
						lastName: {
							contains: searchTerm ?? ''
						}
					},
					{
						email: {
							contains: searchTerm ?? ''
						}
					},
					{
						phone: {
							contains: searchTerm ?? ''
						}
					}
				]
			},
			truck: {
				vin: {
					contains: searchTerm ?? ''
				}
			}
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

	return json(customers);
};
