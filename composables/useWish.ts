import { FetchOptions } from 'ofetch';

import useFetchAPI from './useFetchAPI';

export default () => {
	const postWish = ({ name, message, attendance }: Wish) => {
		const form = new FormData();

		form.append('name', name);
		form.append('message', message);
		form.append('attendance', attendance);

		return useFetchAPI('https://jsonplaceholder.typicode.com/todos', { method: 'POST', body: form });
	};

	const getWishes = async (params: FetchOptions = {}) => await useFetchAPI('https://jsonplaceholder.typicode.com/todos', { method: 'GET', params });

	return { getWishes, postWish };
};
