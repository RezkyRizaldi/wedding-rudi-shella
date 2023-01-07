import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	try {
		await prisma.$connect();

		const wishes = await prisma.wish.findMany();
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
		await prisma.$disconnect();
		process.exit(1);
	} finally {
		await prisma.$disconnect();
	}
});
