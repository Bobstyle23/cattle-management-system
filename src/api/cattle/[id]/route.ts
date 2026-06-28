import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface CattleParam {
  params: { id: string };
}

export async function GET(request: Request, { params }: CattleParam) {
  const cattle = await prisma.cattle.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!cattle) {
    return NextResponse.json({ message: "Cattle not found" }, { status: 404 });
  }

  return NextResponse.json(cattle);
}
