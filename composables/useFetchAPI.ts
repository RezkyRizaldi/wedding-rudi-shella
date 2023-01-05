import { FetchOptions } from 'ofetch';

export default (url: string, options: FetchOptions = {}) => {
	return $fetch(url, { ...options });
};
