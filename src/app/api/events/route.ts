import { NextResponse } from "next/server";
import client from "@/lib/mongodb";
import { getAdminSession } from "@/lib/adminAuth";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const fetchAll = searchParams.get("all") === "true";

    const db = client.db("shridhyan_ashram");

    if (fetchAll) {
      const session = await getAdminSession();
      if (!session.authenticated) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      const allEvents = await db
        .collection("events")
        .find()
        .sort({ startDate: 1, createdAt: -1 })
        .toArray();

      return NextResponse.json({
        success: true,
        events: allEvents.map((doc) => ({
          ...doc,
          _id: doc._id.toString(),
        })),
      });
    }

    // Public request: return only active events
    const activeEvents = await db
      .collection("events")
      .find({ status: "active" })
      .sort({ startDate: 1, createdAt: -1 })
      .toArray();

    return NextResponse.json({
      success: true,
      events: activeEvents.map((doc) => ({
        ...doc,
        _id: doc._id.toString(),
      })),
    });
  } catch (error) {
    console.error("[Events Fetch Error]:", error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await getAdminSession();
    if (!session.authenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const {
      title,
      subtitle,
      category,
      startDate,
      endDate,
      dateDisplay,
      time,
      location,
      description,
      capacity,
      status,
      registrationOpen,
      featured,
    } = body;

    if (!title || !title.trim()) {
      return NextResponse.json(
        { error: "Event title is required" },
        { status: 400 }
      );
    }

    const newEvent = {
      title: String(title).trim(),
      subtitle: subtitle ? String(subtitle).trim() : "",
      category: category ? String(category).trim() : "सत्संग एवं साधना",
      startDate: startDate || "",
      endDate: endDate || "",
      dateDisplay: dateDisplay ? String(dateDisplay).trim() : "",
      time: time ? String(time).trim() : "",
      location: location ? String(location).trim() : "श्रीध्यान आश्रम, उत्तरकाशी",
      description: description ? String(description).trim() : "",
      capacity: capacity ? String(capacity).trim() : "25 साधक",
      status: status || "active", // 'active' | 'draft' | 'past' | 'cancelled'
      registrationOpen: registrationOpen !== false,
      featured: Boolean(featured),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const db = client.db("shridhyan_ashram");
    const result = await db.collection("events").insertOne(newEvent);

    return NextResponse.json({
      success: true,
      message: "Event created successfully",
      eventId: result.insertedId.toString(),
    });
  } catch (error) {
    console.error("[Event Creation Error]:", error);
    return NextResponse.json(
      { error: "Failed to create event" },
      { status: 500 }
    );
  }
}
