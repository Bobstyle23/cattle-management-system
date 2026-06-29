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

  const status = await prisma.cattle.groupBy({
    by: ["status"],
    _count: {
      status: true,
    },
  });

  const STATUS_COLORS: Record<string, string> = {
    HEALTHY: "#22c55e",
    SICK: "#ef4444",
    PREGNANT: "#f59e0b",
    SOLD: "#6b7280",
    DECEASED: "#000",
  } as const;

  const statusChart = status.map((item) => ({
    status: item.status,
    value: item._count.status,
    fill: STATUS_COLORS[item.status],
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
    statusChart,
  });
}
