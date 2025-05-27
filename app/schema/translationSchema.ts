import {
  boolean,
  decimal,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

import { newsletters } from "./newsletterSchema";

export const translationProviderEnum = pgEnum("translation_provider", [
  "gpt",
  "deepl",
]);

export const translations = pgTable("translations", {
  id: uuid("id").primaryKey(),
  newsletterId: uuid("newsletter_id").references(() => newsletters.id, {
    onDelete: "cascade",
  }),
  language: varchar("language").notNull(),
  translatedTitle: varchar("translated_title").notNull(),
  translatedContent: text("translated_content").notNull(),
  translationProvider: translationProviderEnum("translation_provider"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  editedByUser: boolean("edited_by_user").default(false),
  qualityScore: decimal("quality_score", { precision: 5, scale: 2 }),
});
