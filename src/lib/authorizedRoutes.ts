import { NextRequest, NextResponse } from "next/server";
import { checkAuthAndRole } from "@/src/app/middleware/authMiddleware";
import type { JWTPayload } from "@/src/lib/auth";

/**
 * Wrapper for API routes that require authentication only
 */
export async function withAuth(
  handler: (
    req: NextRequest,
    user: JWTPayload
  ) => Promise<NextResponse>
) {
  return async (req: NextRequest) => {
    const { authenticated, user, response } = await checkAuthAndRole(req, [
      "ADMIN",
      "SUPERADMIN",
    ]);

    if (!authenticated || !user) {
      return response || NextResponse.json(
        { error: "Unauthenticated" },
        { status: 401 }
      );
    }

    return handler(req, user);
  };
}

/**
 * Wrapper for API routes that require SUPERADMIN role
 */
export async function withSuperAdminAuth(
  handler: (
    req: NextRequest,
    user: JWTPayload
  ) => Promise<NextResponse>
) {
  return async (req: NextRequest) => {
    const { authenticated, authorized, user, response } = await checkAuthAndRole(
      req,
      ["SUPERADMIN"]
    );

    if (!authenticated || !authorized || !user) {
      return (
        response ||
        NextResponse.json(
          { error: "Forbidden: SUPERADMIN access required" },
          { status: 403 }
        )
      );
    }

    return handler(req, user);
  };
}

/**
 * Wrapper for API routes that require ADMIN or SUPERADMIN role
 */
export async function withAdminAuth(
  handler: (
    req: NextRequest,
    user: JWTPayload
  ) => Promise<NextResponse>
) {
  return async (req: NextRequest) => {
    const { authenticated, authorized, user, response } = await checkAuthAndRole(
      req,
      ["ADMIN", "SUPERADMIN"]
    );

    if (!authenticated || !authorized || !user) {
      return (
        response ||
        NextResponse.json(
          { error: "Forbidden: ADMIN access required" },
          { status: 403 }
        )
      );
    }

    return handler(req, user);
  };
}

