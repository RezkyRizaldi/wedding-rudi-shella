import { PrismaClient } from '@prisma/client';
import Pusher from 'pusher';

const prisma = new PrismaClient();
const config = useRuntimeConfig();

const pusher = new Pusher({
	appId: config.public.pusher.appId,
	key: config.public.pusher.key,
	secret: config.public.pusher.secret,
	cluster: config.public.pusher.cluster,
	useTLS: true,
});

export default defineEventHandler(async (event) => {
	const data = await readBody<Wish>(event);

	pusher.trigger('wish-channel', 'wish-event', data);

	return await prisma.wish.create({ data });
});
