import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  ADMIN_COOKIE_NAME,
  signAdminToken,
} from "@/lib/adminAuth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    if (
      cleanEmail !== ADMIN_EMAIL.toLowerCase() ||
      cleanPassword !== ADMIN_PASSWORD
    ) {
      return NextResponse.json(
        { error: "Invalid admin email or password" },
        { status: 401 }
      );
    }

    // Generate signed token
    const token = signAdminToken(ADMIN_EMAIL);

    // Set HTTP-only secure cookie
    const cookieStore = await cookies();
    cookieStore.set(ADMIN_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: "/",
    });

    return NextResponse.json({
      success: true,
      message: "Admin authentication successful",
      user: {
        email: ADMIN_EMAIL,
        role: "admin",
      },
    });
  } catch (error) {
    console.error("[Admin Login Error]:", error);
    return NextResponse.json(
      { error: "Internal server error during authentication" },
      { status: 500 }
    );
  }
}

