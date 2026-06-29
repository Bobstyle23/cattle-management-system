import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cattleSchema } from "@/lib/validation";

interface CattleParam {
  params: Promise<{ id: string }>;
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  const cattle = await prisma.cattle.findUnique({
    where: { id },
  });

  if (!cattle) {
    return NextResponse.json({ message: "Cattle not found" }, { status: 404 });
  }

  return NextResponse.json(cattle);
}

export async function PUT(request: Request, { params }: CattleParam) {
  const { id } = await params;

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
      id: id,
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

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;

    await prisma.cattle.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Delete failed",
      },
      {
        status: 500,
      },
    );
  }
}
