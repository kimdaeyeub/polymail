import { pgEnum, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

import { profiles } from "./userSchema";

export const subscriberStatusEnum = pgEnum("subscriber_status", [
  "active",
  "unsubscribed",
]);

export const subscribers = pgTable("subscribers", {
  id: uuid("id").primaryKey(),
  userId: uuid().references(() => profiles.profile_id, { onDelete: "cascade" }),
  email: varchar("email").notNull(),
  preferredLanguage: varchar("preferred_language").notNull(),
  status: subscriberStatusEnum("status").default("active"),
  source: varchar("source"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  lastOpenedAt: timestamp("last_opened_at"),
  lastClickedAt: timestamp("last_clicked_at"),
});
