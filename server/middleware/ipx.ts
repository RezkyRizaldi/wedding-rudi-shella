import { createIPX, createIPXMiddleware } from 'ipx';

export default defineEventHandler(() => {
	const ipx = createIPX({
		dir: './public/images',
		domains: [],
		alias: {},
		sharp: {},
	});

	createIPXMiddleware(ipx);
});
