
import { prisma } from "@/src/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { checkAuthAndRole } from "@/src/app/middleware/authMiddleware";
import { registerLimiter } from "@/src/lib/rateLimiter";
import { registerSchema } from "@/src/schemas/userSchema";

export async function POST(req: NextRequest) {
  try {

    // Get client IP for rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

    
    if (!registerLimiter(ip)) {
      return NextResponse.json(
        { error: "Too many registration attempts, please try later" },
        { status: 429 }
      );
    }

    //  Parse request body
    const body = await req.json();

    //  Input validation
    const parsed = registerSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email: rawEmail, password, role } = parsed.data;
    const email = rawEmail.trim().toLowerCase();

    //  Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 409 }
      );
    }

    //  Only SUPERADMIN can create admin users
    if (role === "ADMIN" || role === "SUPERADMIN") {
      const { authenticated, authorized, response } = await checkAuthAndRole(
        req,
        ["SUPERADMIN"]
      );

      if (!authenticated || !authorized) {
        return (
          response ||
          NextResponse.json(
            { error: "Only SUPERADMIN can create admin users" },
            { status: 403 }
          )
        );
      }
    }

    //  Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in DB
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role === "SUPERADMIN" ? "SUPERADMIN" : "ADMIN",
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        user: newUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "An error occurred during registration" },
      { status: 500 }
    );
  }
}