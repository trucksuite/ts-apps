import { PrismaClient } from '@repo/db';

// import { env } from '$env/dynamic/private';

const client =
	// global.prisma
	new PrismaClient();

// if (env.NODE_ENV === 'development') global.prisma = client;

export { client };
