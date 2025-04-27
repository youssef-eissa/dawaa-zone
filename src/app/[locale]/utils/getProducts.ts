import { prisma } from "../../../../lib/prisma";

 export async function getProducts() {
  const result = await prisma.product.findMany({
    include: {
      images: true,
    },
  });
  return result;
}