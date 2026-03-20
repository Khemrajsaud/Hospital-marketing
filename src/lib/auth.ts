import { jwtVerify, SignJWT } from "jose";

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key-change-in-production"
);

export interface JWTPayload {
  id: number;
  email: string;
  role: "SUPERADMIN" | "ADMIN";
  iat?: number;
  exp?: number;
}

/**
 * Create a JWT token
 */
export async function createToken(payload: Omit<JWTPayload, "iat" | "exp">) {
  const token = await new SignJWT(payload as Record<string, any>)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(secret);

  return token;
}


export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const verified = await jwtVerify(token, secret);
    const payload = verified.payload as unknown as JWTPayload;
    return payload;
  } catch (error) {
    return null;
  }
}


 // Extract token from Authorization header
 
export function extractToken(authHeader: string | null): string | null {
  if (!authHeader) return null;
  const parts = authHeader.split(" ");
  if (parts.length === 2 && parts[0] === "Bearer") {
    return parts[1];
  }
  return null;
}


 //Generate a reset password token

export function generateResetToken(): { token: string; expiry: Date } {
  const resetToken = Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  const resetExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

  return { token: resetToken, expiry: resetExpiry };
}

/**
 * Check if user has required role
 */
export function hasRole(
  userRole: string | undefined,
  requiredRoles: string[]
): boolean {
  if (!userRole) return false;
  return requiredRoles.includes(userRole);
}

/**
 * Check if user is SUPERADMIN
 */
export function isSuperAdmin(userRole: string | undefined): boolean {
  return userRole === "SUPERADMIN";
}

/**
 * Check if user is ADMIN or SUPERADMIN
 */
export function isAdmin(userRole: string | undefined): boolean {
  return userRole === "ADMIN" || userRole === "SUPERADMIN";
}
