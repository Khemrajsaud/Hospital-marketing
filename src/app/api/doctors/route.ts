
import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";
import { publicLimiter, adminLimiter } from "@/src/lib/rateLimiter";

// GET DOCTORS 
export async function GET(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

    // Public rate limit
    if (!publicLimiter(ip)) {
      return NextResponse.json(
        { error: "Too many requests, please try again later" },
        { status: 429 }
      );
    }

    const doctors = await prisma.doctor.findMany({
      include: {
        specialty: true,
        services: true,
        schedules: true,
      },
    });

    return NextResponse.json(doctors, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch doctors" },
      { status: 500 }
    );
  }
}

// CREATE DOCTOR 
export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

    // Admin rate limit
    if (!adminLimiter(ip)) {
      return NextResponse.json(
        { error: "Too many requests, please try again later" },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, image, experience, location, specialtyId, services } = body;

    if (!name || !specialtyId) {
      return NextResponse.json(
        { error: "Name and Specialty are required" },
        { status: 400 }
      );
    }

    const doctor = await prisma.doctor.create({
      data: {
        name,
        image,
        experience,
        location,
        specialtyId: parseInt(specialtyId),

        services: {
          create: services?.map((s: string) => ({ name: s })) || [],
        },
      },
      include: {
        specialty: true,
        services: true,
      },
    });

    return NextResponse.json(doctor, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating doctor" },
      { status: 500 }
    );
  }
}