import { NextResponse } from "next/server";
import { prisma } from "@/src/lib/prisma";

// 1. POST: Save a new Inquiry 
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, address, phone, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, Email, and Message are required" }, { status: 400 });
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

    return NextResponse.json({ 
      success: true, 
      message: "Inquiry stored successfully!", 
      id: newInquiry.id 
    }, { status: 201 });

  } catch (error) {
    console.error("Inquiry POST Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// 2. GET: Fetch all Inquiries (For the Admin Dashboard)
export async function GET() {
  try {
   
    const inquiries = await prisma.inquiry.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(inquiries, { status: 200 });
  } catch (error) {
    console.error("Inquiry GET Error:", error);
    return NextResponse.json({ error: "Failed to fetch inquiries" }, { status: 500 });
  }
}