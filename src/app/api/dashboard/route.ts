import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const total = await prisma.cattle.count();

  const healthy = await prisma.cattle.count({
    where: { status: "HEALTHY" },
  });

  const sick = await prisma.cattle.count({
    where: { status: "SICK" },
  });

  const sold = await prisma.cattle.count({
    where: { status: "SOLD" },
  });

  const pregnant = await prisma.cattle.count({
    where: { status: "PREGNANT" },
  });

  const recent = await prisma.cattle.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const breeds = await prisma.cattle.groupBy({
    by: ["breed"],
    _count: true,
  });

  const breedChart = breeds.map((item) => ({
    breed: item.breed,
    count: item._count,
  }));

  return NextResponse.json({
    total,
    healthy,
    sick,
    sold,
    pregnant,
    recent,
    breeds,
    breedChart,
  });
}
