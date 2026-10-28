/**
 * db.ts — Typed MongoDB collection helpers
 *
 * Use this file for all direct DB queries outside of NextAuth's adapter
 * (e.g. reading user profiles, enquiries, etc.)
 */
import { Collection, Db, ObjectId, OptionalId, Document } from "mongodb";
import client from "./mongodb";

const DB_NAME = "shridhyan_ashram";

// -----------------------------------------------------------------
// Database accessor
// -----------------------------------------------------------------
export async function getDb(): Promise<Db> {
  const conn = await client.connect();
  return conn.db(DB_NAME);
}

// -----------------------------------------------------------------
// Collection accessors — typed per-collection
// -----------------------------------------------------------------
export async function usersCollection(): Promise<Collection<UserDocument>> {
  const db = await getDb();
  return db.collection<UserDocument>("users");
}

export async function enquiriesCollection(): Promise<Collection<EnquiryDocument>> {
  const db = await getDb();
  return db.collection<EnquiryDocument>("enquiries");
}

export async function sessionsCollection(): Promise<Collection<Document>> {
  const db = await getDb();
  return db.collection("sessions");
}

// -----------------------------------------------------------------
// Types — extend as your schema grows
// -----------------------------------------------------------------
export interface UserDocument {
  _id?: ObjectId;
  name: string;
  email: string;
  emailVerified?: Date | null;
  image?: string | null;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
}

export interface EnquiryDocument {
  _id?: ObjectId;
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
  status: "new" | "contacted" | "resolved";
  createdAt: Date;
}

// -----------------------------------------------------------------
// Utility — convert string id → ObjectId safely
// -----------------------------------------------------------------
export function toObjectId(id: string): ObjectId {
  return new ObjectId(id);
}

// -----------------------------------------------------------------
// User helpers
// -----------------------------------------------------------------
export async function getUserByEmail(email: string): Promise<UserDocument | null> {
  const col = await usersCollection();
  return col.findOne({ email });
}

export async function upsertUser(
  data: OptionalId<UserDocument>
): Promise<UserDocument> {
  const col = await usersCollection();
  const now = new Date();
  const result = await col.findOneAndUpdate(
    { email: data.email },
    {
      $set: { ...data, updatedAt: now },
      $setOnInsert: { createdAt: now, role: data.role ?? "user" },
    },
    { upsert: true, returnDocument: "after" }
  );
  return result as UserDocument;
}

// -----------------------------------------------------------------
// Enquiry helpers
// -----------------------------------------------------------------
export async function createEnquiry(
  data: Omit<EnquiryDocument, "_id" | "status" | "createdAt">
): Promise<EnquiryDocument> {
  const col = await enquiriesCollection();
  const doc: OptionalId<EnquiryDocument> = {
    ...data,
    status: "new",
    createdAt: new Date(),
  };
  const result = await col.insertOne(doc);
  return { ...doc, _id: result.insertedId };
}

export async function listEnquiries(
  limit = 50
): Promise<EnquiryDocument[]> {
  const col = await enquiriesCollection();
  return col.find({}).sort({ createdAt: -1 }).limit(limit).toArray();
}
