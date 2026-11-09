import { NextResponse } from "next/server";
import client from "@/lib/mongodb";
import { getAdminSession } from "@/lib/adminAuth";

export async function GET() {
  try {
    const session = await getAdminSession();
    if (!session.authenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const db = client.db("shridhyan_ashram");
    const users = await db
      .collection("users")
      .find()
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();

    return NextResponse.json({
      success: true,
      users: users.map((u) => ({
        _id: u._id.toString(),
        name: u.name || "Seeker",
        email: u.email,
        image: u.image || null,
        role: u.role || (u.email === "shridhyan108@gmail.com" ? "admin" : "seeker"),
        createdAt: u.createdAt || null,
      })),
    });
  } catch (error) {
    console.error("[Admin Users Fetch Error]:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}

