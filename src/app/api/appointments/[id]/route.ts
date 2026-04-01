import { prisma } from "@/src/lib/prisma";
import { NextResponse } from "next/server";
import { adminLimiter } from "@/src/lib/rateLimiter";

type RouteContext = {
  params: Promise<{ id: string }>;
};

const allowedStatuses = ["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"] as const;
type AllowedStatus = (typeof allowedStatuses)[number];

export async function PATCH(req: Request, { params }: RouteContext) {
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
      return NextResponse.json(
        { error: "Invalid appointment id" },
        { status: 400 }
      );
    }

    const { status } = await req.json();

    const normalizedStatus =
      typeof status === "string"
        ? (status.trim().toUpperCase() as AllowedStatus)
        : undefined;

    if (!normalizedStatus || !allowedStatuses.includes(normalizedStatus)) {
      return NextResponse.json(
        {
          error: `Invalid status. Use one of: ${allowedStatuses.join(", ")}`,
        },
        { status: 400 }
      );
    }

    const updated = await prisma.appointment.update({
      where: { id },
      data: { status: normalizedStatus },
    });

    return NextResponse.json(updated);
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("Record to update not found")
    ) {
      return NextResponse.json(
        { error: "Appointment not found" },
        { status: 404 }
      );
    }

    const message = error instanceof Error ? error.message : "Update failed";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}