
import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";
import { publicLimiter, adminLimiter } from "@/src/lib/rateLimiter";

// CREATE INQUIRY 
export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

    // Rate limit for public form submission
    if (!publicLimiter(ip)) {
      return NextResponse.json(
        { error: "Too many requests, please try again later" },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, address, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, Email, and Message are required" },
        { status: 400 }
      );
    }

    const newInquiry = await prisma.inquiry.create({
      data: {
        name,
        email,
        address,
        phone,
        message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry stored successfully!",
        id: newInquiry.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Inquiry POST Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// GET INQUIRIES 
export async function GET(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

    // Rate limit for admin access
    if (!adminLimiter(ip)) {
      return NextResponse.json(
        { error: "Too many requests, please try again later" },
        { status: 429 }
      );
    }

    const inquiries = await prisma.inquiry.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(inquiries, { status: 200 });
  } catch (error) {
    console.error("Inquiry GET Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}