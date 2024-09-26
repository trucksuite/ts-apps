// import { appHost } from '$lib/helpers/helpers';
import type { State } from '@vincjo/datatables/remote';

export const reload = async <T>(
	state: State,
	type: string = 'producers',
	options?: {
		salesRepId?: string;
		producerId?: string;
		locationId?: string;
	}
) => {
	// console.log('type', type);
	// console.log('state', state);
	// console.log('options', options);
	const response = await fetch(`http://localhost:5174/api/${type}?${getParams(state, options)}`);
	return response.json() as T;
};

const getParams = (
	state: State,
	options?: {
		salesRepId?: string;
		producerId?: string;
		locationId?: string;
	}
) => {
	const { pageNumber, rowsPerPage, sort, search } = state;

	let params = `_page=${pageNumber}`;

	if (rowsPerPage) {
		params += `&_limit=${rowsPerPage}`;
	}
	if (sort) {
		params += `&_sort=${sort.orderBy}&_order=${sort.direction}`;
	}

	if (search) {
		params += `&q=${search}`;
	}

	if (options?.salesRepId) {
		params += `&salesRepId=${options?.salesRepId}`;
	}
	if (options?.producerId) {
		params += `&producerId=${options?.producerId}`;
	}
	if (options?.locationId) {
		params += `&locationId=${options?.locationId}`;
	}
	return params;
};
