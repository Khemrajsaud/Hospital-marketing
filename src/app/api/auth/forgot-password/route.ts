import { prisma } from "@/src/lib/prisma";
import { generateResetToken } from "@/src/lib/auth";
import { sendResetPasswordEmail } from "@/src/lib/mail";
import { NextRequest, NextResponse } from "next/server";
import { forgotPasswordLimiter } from "@/src/lib/rateLimiter";

export async function POST(req: NextRequest) {
  try {

    // Apply rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

    const isAllowed = forgotPasswordLimiter(ip);

    if (!isAllowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const rawEmail = typeof body?.email === "string" ? body.email : "";
    const email = rawEmail.trim().toLowerCase();

    // Validate input
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, name: true, email: true },
    });

    if (!user) {
      // Prevent email enumeration
      return NextResponse.json(
        {
          success: true,
          message:
            "If an account exists with this email, a reset link will be sent",
        },
        { status: 200 }
      );
    }

    // Generate reset token
    const { token, expiry } = generateResetToken();

    // Save token in DB
    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetToken: token,
        resetExpiry: expiry,
      },
    });

    // Send email
    try {
      await sendResetPasswordEmail(user.email, user.name, token);
    } catch (emailError) {
      console.error("Error sending reset email:", emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "If an account exists with this email, a reset link will be sent",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json(
      { error: "An error occurred. Please try again later" },
      { status: 500 }
    );
  }
}