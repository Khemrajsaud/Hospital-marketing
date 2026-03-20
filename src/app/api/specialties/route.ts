import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";


export async function GET() {
  try {
    const specialties = await prisma.specialty.findMany({
      orderBy: { id: "asc" },
      select: { id: true, name: true },
    });

    return NextResponse.json(specialties);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected error while fetching specialties";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";

    if (!name) {
      return NextResponse.json({ error: "name is required" }, { status: 400 });
    }

    const specialty = await prisma.specialty.create({
      data: { name },
      select: { id: true, name: true },
    });

    return NextResponse.json(specialty, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected error while creating specialty";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
