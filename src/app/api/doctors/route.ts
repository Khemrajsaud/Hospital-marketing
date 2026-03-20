
import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";


// READ: Get all doctors with their specialty, services, and schedules 
export async function GET() {
  try {
    const doctors = await prisma.doctor.findMany({
      include: {
        specialty: true,
        services: true,
        schedules: true,
      },
    });
    return NextResponse.json(doctors);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch doctors" }, { status: 500 });
  }
}

// CREATE: Add a new doctor profile 
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, image, experience, location, specialtyId, services } = body;

    const doctor = await prisma.doctor.create({
      data: {
        name,
        image,
        experience,
        location,
        specialtyId: parseInt(specialtyId),
        // Requirement: Manage specific services/tags shown on the card
        services: {
          create: services.map((s: string) => ({ name: s })),
        },
      },
      include: { specialty: true, services: true },
    });

    return NextResponse.json(doctor, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error creating doctor" }, { status: 500 });
  }
}