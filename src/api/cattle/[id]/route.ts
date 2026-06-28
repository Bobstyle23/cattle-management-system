import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cattleSchema } from "@/lib/validation";

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

export async function PUT(request: Request, { params }: CattleParam) {
  const body = await request.json();
  const result = cattleSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { errors: result.error.flatten() },
      { status: 400 },
    );
  }

  const cattle = await prisma.cattle.update({
    where: {
      id: params.id,
    },
    data: {
      tagNumber: body.tagNumber,
      breed: body.breed,
      gender: body.gender,
      dateOfBirth: new Date(body.dateOfBirth),
      status: body.status,
    },
  });

  return NextResponse.json(cattle);
}

export async function DELETE(request: Request, { params }: CattleParam) {
  await prisma.cattle.delete({
    where: {
      id: params.id,
    },
  });

  return NextResponse.json({ message: `${params.id} cattle deleted` });
}
