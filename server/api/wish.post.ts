import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const data = await readBody<Wish>(event);

	return await prisma.wish.create({ data });
});
