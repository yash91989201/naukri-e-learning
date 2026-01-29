import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	certificates: defineTable({
		name: v.string(),
		description: v.string(),
		duration: v.string(),
		level: v.string(),
		createdAt: v.number(),
	}),
	contactResponses: defineTable({
		name: v.string(),
		email: v.string(),
		phone: v.optional(v.string()),
		message: v.optional(v.string()),
		certificateIds: v.optional(v.array(v.id("certificates"))),
		submittedAt: v.number(),
	}),
});
