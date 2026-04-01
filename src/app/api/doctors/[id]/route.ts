import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";
import { adminLimiter } from "@/src/lib/rateLimiter";

type RouteContext = {
  params: Promise<{ id: string }>;
};

// UPDATE DOCTOR
export async function PUT(req: Request, { params }: RouteContext) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

    // Rate limit 
    if (!adminLimiter(ip)) {
      return NextResponse.json(
        { error: "Too many requests, please try again later" },
        { status: 429 }
      );
    }

    const { id: idParam } = await params;
    const id = Number(idParam);

    if (!Number.isInteger(id) || id <= 0) {
      return NextResponse.json({ error: "Invalid doctor id" }, { status: 400 });
    }

    const body = await req.json();

    const updateData: {
      name?: string;
      image?: string | null;
      experience?: string;
      location?: string;
      specialtyId?: number;
    } = {};

    if (typeof body?.name === "string" && body.name.trim().length > 0) {
      updateData.name = body.name.trim();
    }

    if (typeof body?.experience === "string" && body.experience.trim().length > 0) {
      updateData.experience = body.experience.trim();
    }

    if (typeof body?.location === "string" && body.location.trim().length > 0) {
      updateData.location = body.location.trim();
    }

    if (typeof body?.image === "string") {
      updateData.image = body.image.trim() || null;
    }

    if (body?.specialtyId !== undefined && body?.specialtyId !== null) {
      const parsedSpecialtyId = Number(body.specialtyId);

      if (!Number.isInteger(parsedSpecialtyId) || parsedSpecialtyId <= 0) {
        return NextResponse.json({ error: "Invalid specialtyId" }, { status: 400 });
      }

      const specialtyExists = await prisma.specialty.findUnique({
        where: { id: parsedSpecialtyId },
        select: { id: true },
      });

      if (!specialtyExists) {
        return NextResponse.json({ error: "Specialty not found" }, { status: 404 });
      }

      updateData.specialtyId = parsedSpecialtyId;
    }

    const normalizedServices = Array.isArray(body?.services)
      ? body.services.filter(
          (s: unknown): s is string =>
            typeof s === "string" && s.trim().length > 0
        )
      : null;

    const updatedDoctor = await prisma.$transaction(async (tx) => {
      const doctor = await tx.doctor.update({
        where: { id },
        data: updateData,
      });

      if (normalizedServices) {
        await tx.doctorService.deleteMany({ where: { doctorId: id } });

        if (normalizedServices.length > 0) {
          await tx.doctorService.createMany({
            data: normalizedServices.map((name: string) => ({
              doctorId: id,
              name,
            })),
          });
        }
      }

      return tx.doctor.findUnique({
        where: { id: doctor.id },
        include: { specialty: true, services: true, schedules: true },
      });
    });

    if (!updatedDoctor) {
      return NextResponse.json({ error: "Doctor not found" }, { status: 404 });
    }

    return NextResponse.json(updatedDoctor);
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("Record to update not found")
    ) {
      return NextResponse.json({ error: "Doctor not found" }, { status: 404 });
    }

    const message = error instanceof Error ? error.message : "Update failed";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// DELETE DOCTOR
export async function DELETE(req: Request, { params }: RouteContext) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

    // Rate limit 
    if (!adminLimiter(ip)) {
      return NextResponse.json(
        { error: "Too many requests, please try again later" },
        { status: 429 }
      );
    }

    const { id: idParam } = await params;
    const id = Number(idParam);

    if (!Number.isInteger(id) || id <= 0) {
      return NextResponse.json({ error: "Invalid doctor id" }, { status: 400 });
    }

    await prisma.doctor.delete({ where: { id } });

    return NextResponse.json({ message: "Doctor deleted successfully" });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("Record to delete does not exist")
    ) {
      return NextResponse.json({ error: "Doctor not found" }, { status: 404 });
    }

    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}