import { PrismaClient } from "@prisma/client";
import type { PageServerLoad } from "./$types";

const client = new PrismaClient();

export const load: PageServerLoad = async () => {
  const customerData = await client.customer.findMany();

  return {
    props: {
      customerData,
    },
  };
  
}
