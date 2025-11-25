import { type Inquiry, type InsertInquiry } from "@shared/schema";
import { db } from "./db";
import { inquiries } from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class DbStorage implements IStorage {
  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const result = await db.insert(inquiries).values(inquiry).returning();
    return result[0];
  }
}

export const storage = new DbStorage();