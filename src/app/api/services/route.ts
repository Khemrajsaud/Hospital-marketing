
import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";
import { publicLimiter, adminLimiter } from "@/src/lib/rateLimiter";

// CREATE SERVICE
export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

    // Rate limit for admin actions
    if (!adminLimiter(ip)) {
      return NextResponse.json(
        { error: "Too many requests, please try again later" },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { title, description } = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and Description are required" },
        { status: 400 }
      );
    }

    const newService = await prisma.service.create({
      data: {
        title,
        description,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Service added successfully",
        data: newService,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Service POST Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// GET SERVICES
export async function GET(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

    // Rate limit for public access
    if (!publicLimiter(ip)) {
      return NextResponse.json(
        { error: "Too many requests, please try again later" },
        { status: 429 }
      );
    }

    const services = await prisma.service.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(services, { status: 200 });
  } catch (error) {
    console.error("Service GET Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}