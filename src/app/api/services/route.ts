import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";

//  POST: Add a new Hospital Service 
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description } = body;

    // Validation: Title and Description are required
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

    return NextResponse.json({ 
      success: true, 
      message: "Service added successfully!", 
      data: newService 
    }, { status: 201 });

  } catch (error) {
    console.error("Service POST Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// 2. GET: Fetch all Services 
export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: {
        createdAt: 'desc' 
      }
    });

    return NextResponse.json(services, { status: 200 });
  } catch (error) {
    console.error("Service GET Error:", error);
    return NextResponse.json({ error: "Failed to fetch services" }, { status: 500 });
  }
}