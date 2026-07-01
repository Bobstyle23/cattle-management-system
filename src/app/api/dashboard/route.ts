import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { STATUS_VARIANTS } from "@/entities/StatusVariants";
import { Status } from "@/entities/Status";

export async function GET() {
  const [
    total,
    healthy,
    sick,
    sold,
    deceased,
    pregnant,
    status,
    breeds,
    recentCattle,
  ] = await Promise.all([
    prisma.cattle.count(),
    prisma.cattle.count({ where: { status: "HEALTHY" } }),
    prisma.cattle.count({ where: { status: "SICK" } }),
    prisma.cattle.count({ where: { status: "SOLD" } }),
    prisma.cattle.count({ where: { status: "DECEASED" } }),
    prisma.cattle.count({ where: { status: "PREGNANT" } }),
    prisma.cattle.groupBy({
      by: ["status"],
      _count: true,
    }),
    prisma.cattle.groupBy({ by: ["breed"], _count: true }),
    prisma.cattle.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    }),
  ]);

  const breedChart = breeds.map((item: { breed: string; _count: number }) => ({
    breed: item.breed,
    count: item._count,
  }));

  const statusChart = status.map(
    (item: { status: Status; _count: number }) => ({
      status: item.status,
      value: item._count,
      fill: STATUS_VARIANTS[item.status],
    }),
  );

  return NextResponse.json({
    total,
    healthy,
    sick,
    sold,
    deceased,
    pregnant,
    breeds,
    status,
    breedChart,
    statusChart,
    recentCattle,
  });
}
