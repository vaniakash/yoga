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

    const [totalInquiries, newInquiries, enrolledCount, totalUsers] = await Promise.all([
      db.collection("inquiries").countDocuments(),
      db.collection("inquiries").countDocuments({ status: "new" }),
      db.collection("inquiries").countDocuments({ status: "enrolled" }),
      db.collection("users").countDocuments(),
    ]);

    const recentInquiries = await db
      .collection("inquiries")
      .find()
      .sort({ createdAt: -1 })
      .limit(5)
      .toArray();

    return NextResponse.json({
      success: true,
      stats: {
        totalInquiries,
        newInquiries,
        enrolledCount,
        totalUsers,
        recentInquiries: recentInquiries.map((doc) => ({
          ...doc,
          _id: doc._id.toString(),
        })),
      },
    });
  } catch (error) {
    console.error("[Admin Stats Error]:", error);
    return NextResponse.json(
      { error: "Failed to load dashboard statistics" },
      { status: 500 }
    );
  }
}
