import { cookies } from "next/headers";
import { auth } from "@/auth";
import crypto from "crypto";

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "shridhyan108@gmail.com";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Aku79020";
const SECRET = process.env.AUTH_SECRET || "shridhyan-sacred-admin-secret-key-108";
export const ADMIN_COOKIE_NAME = "shridhyan_admin_session";

interface AdminTokenPayload {
  email: string;
  role: "admin";
  exp: number;
}

/**
 * Generates an HMAC-SHA256 signed token for the admin session.
 */
export function signAdminToken(email: string): string {
  const exp = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days
  const payload: AdminTokenPayload = { email, role: "admin", exp };
  const payloadBase64 = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = crypto
    .createHmac("sha256", SECRET)
    .update(payloadBase64)
    .digest("base64url");

  return `${payloadBase64}.${signature}`;
}

/**
 * Validates the admin session token.
 */
export function verifyAdminToken(token: string | undefined): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;

  const [payloadBase64, signature] = parts;
  const expectedSignature = crypto
    .createHmac("sha256", SECRET)
    .update(payloadBase64)
    .digest("base64url");

  // Constant-time comparison to prevent timing attacks
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
    return false;
  }

  try {
    const payload: AdminTokenPayload = JSON.parse(
      Buffer.from(payloadBase64, "base64url").toString("utf-8")
    );

    if (payload.email !== ADMIN_EMAIL || payload.role !== "admin") {
      return false;
    }

    if (Date.now() > payload.exp) {
      return false; // Expired
    }

    return true;
  } catch {
    return false;
  }
}

/**
 * Checks whether the current request is authenticated as Admin
 * (via dedicated admin cookie OR NextAuth session for shridhyan108@gmail.com).
 */
export async function getAdminSession(): Promise<{
  authenticated: boolean;
  email?: string;
  source?: "credentials" | "nextauth";
}> {
  // 1. Check dedicated admin cookie
  const cookieStore = await cookies();
  const adminCookie = cookieStore.get(ADMIN_COOKIE_NAME)?.value;

  if (verifyAdminToken(adminCookie)) {
    return { authenticated: true, email: ADMIN_EMAIL, source: "credentials" };
  }

  // 2. Check NextAuth session for shridhyan108@gmail.com
  try {
    const session = await auth();
    if (session?.user?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
      return { authenticated: true, email: session.user.email, source: "nextauth" };
    }
  } catch {
    // Session check fallback
  }

  return { authenticated: false };
}
