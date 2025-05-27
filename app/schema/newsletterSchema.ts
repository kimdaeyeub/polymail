import {
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

import { profiles } from "./userSchema";

export const newsletterStatusEnum = pgEnum("newsletter_status", [
  "draft",
  "scheduled",
  "sent",
]);

export const newsletters = pgTable("newsletters", {
  id: uuid("id").primaryKey(),
  userId: uuid().references(() => profiles.profile_id, { onDelete: "cascade" }),
  title: varchar("title").notNull(),
  content: text("content").notNull(),
  sourceLanguage: varchar("source_language").notNull(),
  blockCount: integer("block_count").default(0),
  status: newsletterStatusEnum("status").default("draft"),
  scheduledAt: timestamp("scheduled_at"),
  sentAt: timestamp("sent_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
