import { client } from '@repo/db/client';
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
		const producer = await client.producer.findUnique({
			where: {
				publicId
			}
		});
		return json(producer);
	}

	const producers = await client.producer.findMany({
		where: {
			...(salesRepId ? { tsSalesRepId: salesRepId } : {}),
			OR: [
				{
					name: {
						contains: searchTerm ?? ''
					}
				},
				{
					city: {
						contains: searchTerm ?? ''
					}
				},
				{
					primaryContactName: {
						contains: searchTerm ?? ''
					}
				}
			]
		},
		skip: Number(page) > 1 ? (Number(page) - 1) * Number(limit) : 0,
		take: Number(limit),
		orderBy: {
			[(orderBy as string) ?? 'name']: order ? order : 'asc'
		},
		include: {
			locations: true
		}
	});

	return json(producers);
};

export const DELETE: RequestHandler = async ({ url }) => {
	const publicId = url.searchParams.get('publicId');

	if (!publicId) {
		return json({ message: '❌ Missing publicId' }, { status: 400 });
	}
	const deleteProducer = client.producer.delete({
		where: {
			publicId
		}
	});

	await client.$transaction([deleteProducer]);

	return json({ message: '👍 Producer deleted successfully' });
};
