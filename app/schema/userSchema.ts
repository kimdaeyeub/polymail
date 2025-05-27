import {
  integer,
  pgEnum,
  pgSchema,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const subscriptionTierEnum = pgEnum("subscription_tier", [
  "free",
  "pro",
  "enterprise",
]);

export const userStatusEnum = pgEnum("user_status", ["active", "inactive"]);

export const users = pgSchema("auth").table("users", {
  id: uuid("id").primaryKey(),
});

export const profiles = pgTable("profiles", {
  profile_id: uuid()
    .primaryKey()
    .references(() => users.id, { onDelete: "cascade" }),
  email: varchar("email").unique().notNull(),
  passwordHash: varchar("password_hash").notNull(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  subscriptionTier: subscriptionTierEnum("subscription_tier").default("free"),
  maxBlocksPerNewsletter: integer("max_blocks_per_newsletter"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  lastLogin: timestamp("last_login"),
  status: userStatusEnum("status").default("active"),
});
