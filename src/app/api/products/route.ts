// app/api/products/route.ts (في Next.js App Router)
import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}
