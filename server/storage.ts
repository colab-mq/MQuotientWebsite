import { 
  users, type User, type InsertUser, 
  contactMessages, type ContactMessage, type InsertContactMessage,
  careerApplications, type CareerApplication, type InsertCareerApplication 
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  createCareerApplication(application: InsertCareerApplication): Promise<CareerApplication>;
  getCareerApplications(): Promise<CareerApplication[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result.length > 0 ? result[0] : undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result.length > 0 ? result[0] : undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const result = await db.insert(contactMessages).values({
      ...insertMessage,
      createdAt: new Date().toISOString()
    }).returning();
    
    return result[0];
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages).orderBy(contactMessages.id);
  }

  async createCareerApplication(insertApplication: InsertCareerApplication): Promise<CareerApplication> {
    const result = await db.insert(careerApplications).values({
      ...insertApplication,
      createdAt: new Date().toISOString()
    }).returning();
    
    return result[0];
  }

  async getCareerApplications(): Promise<CareerApplication[]> {
    return await db.select().from(careerApplications).orderBy(careerApplications.id);
  }
}

export const storage = new DatabaseStorage();
