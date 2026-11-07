import { NextResponse } from "next/server";
import client from "@/lib/mongodb";
import { getAdminSession } from "@/lib/adminAuth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, course, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const newInquiry = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : "",
      course: course ? String(course).trim() : "General Ashram Inquiry",
      message: message ? String(message).trim() : "",
      status: "new", // 'new' | 'contacted' | 'enrolled' | 'archived'
      adminNotes: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const db = client.db("shridhyan_ashram");
    const result = await db.collection("inquiries").insertOne(newInquiry);

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been received with reverence. We will connect with you soon.",
      inquiryId: result.insertedId,
    });
  } catch (error) {
    console.error("[Inquiry Submission Error]:", error);
    return NextResponse.json(
      { error: "Unable to record inquiry at this moment." },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const session = await getAdminSession();
    if (!session.authenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const search = searchParams.get("search");

    const query: Record<string, unknown> = {};
    if (status && status !== "all") {
      query.status = status;
    }
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { course: { $regex: search, $options: "i" } },
      ];
    }

    const db = client.db("shridhyan_ashram");
    const inquiries = await db
      .collection("inquiries")
      .find(query)
      .sort({ createdAt: -1 })
      .limit(200)
      .toArray();

    return NextResponse.json({
      success: true,
      inquiries: inquiries.map((doc) => ({
        ...doc,
        _id: doc._id.toString(),
      })),
    });
  } catch (error) {
    console.error("[Admin Inquiries Fetch Error]:", error);
    return NextResponse.json(
      { error: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}
