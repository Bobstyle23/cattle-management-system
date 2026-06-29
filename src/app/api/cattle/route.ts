import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cattleSchema } from "@/lib/validation";

export async function GET() {
  const cattle = await prisma.cattle.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(cattle);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = cattleSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          errors: result.error.flatten(),
        },
        { status: 400 },
      );
    }

    const cattle = await prisma.cattle.create({
      data: {
        tagNumber: body.tagNumber,
        breed: body.breed,
        gender: body.gender,
        dateOfBirth: new Date(body.dateOfBirth),
        status: body.status,
      },
    });

    return NextResponse.json(cattle, { status: 201 });
  } catch (error) {
    console.error("Failed to create cattle:", error);
    return NextResponse.json(
      {
        message: "Failed to create cattle",
      },
      { status: 500 },
    );
  }
}
