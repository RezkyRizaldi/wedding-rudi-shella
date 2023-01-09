import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async () => {
	try {
		await prisma.$connect();

		const wishes = await prisma.wish.findMany({
			orderBy: {
				createdAt: 'desc',
			},
			take: 10,
		});
		const totalWish = await prisma.wish.count();
		const totalAttend = await prisma.wish.count({
			where: {
				attendance: 'Hadir',
			},
		});
		const totalMiss = await prisma.wish.count({
			where: {
				attendance: 'Tidak Hadir',
			},
		});

		return { wishes, totalWish, totalAttend, totalMiss };
	} catch (error) {
		console.error(error);
		process.exit(1);
	} finally {
		await prisma.$disconnect();
	}
});
