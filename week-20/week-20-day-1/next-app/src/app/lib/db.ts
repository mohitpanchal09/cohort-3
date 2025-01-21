import { PrismaClient } from "@prisma/client";

//@ts-ignore
const prismaClient = globalThis.prismaClient ?? new PrismaClient();

if(process.env.NODE_ENV!=="production") globalThis.prismaClient = prismaClient

export default prismaClient;