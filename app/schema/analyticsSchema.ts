import {
  integer,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

import { newsletters } from "./newsletterSchema";

export const analytics = pgTable("analytics", {
  id: uuid("id").primaryKey(),
  newsletterId: uuid("newsletter_id").references(() => newsletters.id, {
    onDelete: "cascade",
  }),
  language: varchar("language").notNull(),
  sentCount: integer("sent_count").default(0),
  openCount: integer("open_count").default(0),
  clickCount: integer("click_count").default(0),
  unsubscribeCount: integer("unsubscribe_count").default(0),
  bounceCount: integer("bounce_count").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
