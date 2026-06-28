import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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
    return NextResponse.json(
      {
        message: "Failed to create cattle",
        error,
      },
      { status: 500 },
    );
  }
}
