import { NextRequest, NextResponse } from "next/server";
import { verifyToken, extractToken } from "@/src/lib/auth";
import type { JWTPayload } from "@/src/lib/auth";

/**
 * Authentication middleware - verifies JWT token
 */
export async function authenticateRequest(
  req: NextRequest
): Promise<{ user: JWTPayload | null; error?: string }> {
  const authHeader = req.headers.get("authorization");
  const token = extractToken(authHeader);

  if (!token) {
    return { user: null, error: "Missing authentication token" };
  }

  const user = await verifyToken(token);

  if (!user) {
    return { user: null, error: "Invalid or expired token" };
  }

  return { user };
}

/**
 * Authorization middleware - checks user role
 */
export function authorizeRole(
  user: JWTPayload | null,
  requiredRoles: Array<"SUPERADMIN" | "ADMIN">
): boolean {
  if (!user) return false;
  return requiredRoles.includes(user.role);
}

/**
 * Middleware response for unauthorized access
 */
export function unauthorizedResponse(message: string = "Unauthorized") {
  return NextResponse.json({ error: message }, { status: 403 });
}

/**
 * Middleware response for unauthenticated access
 */
export function unauthenticatedResponse(message: string = "Unauthenticated") {
  return NextResponse.json({ error: message }, { status: 401 });
}

/**
 * Combined auth + authorization check
 */
export async function checkAuthAndRole(
  req: NextRequest,
  requiredRoles: Array<"SUPERADMIN" | "ADMIN">
): Promise<{
  authenticated: boolean;
  authorized: boolean;
  user: JWTPayload | null;
  response?: NextResponse;
}> {
  const { user, error } = await authenticateRequest(req);

  if (!user) {
    return {
      authenticated: false,
      authorized: false,
      user: null,
      response: unauthenticatedResponse(error),
    };
  }

  const authorized = authorizeRole(user, requiredRoles);

  if (!authorized) {
    return {
      authenticated: true,
      authorized: false,
      user,
      response: unauthorizedResponse(
        `Required roles: ${requiredRoles.join(", ")}`
      ),
    };
  }

  return { authenticated: true, authorized: true, user };
}