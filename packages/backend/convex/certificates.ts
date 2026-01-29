import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
	handler: async (ctx) => {
		const certificates = await ctx.db
			.query("certificates")
			.order("desc")
			.collect();
		return certificates;
	},
});

export const create = mutation({
	args: {
		name: v.string(),
		description: v.string(),
		duration: v.string(),
		level: v.string(),
	},
	handler: async (ctx, args) => {
		const id = await ctx.db.insert("certificates", {
			name: args.name,
			description: args.description,
			duration: args.duration,
			level: args.level,
			createdAt: Date.now(),
		});
		return id;
	},
});

export const update = mutation({
	args: {
		id: v.id("certificates"),
		name: v.string(),
		description: v.string(),
		duration: v.string(),
		level: v.string(),
	},
	handler: async (ctx, args) => {
		const { id, ...data } = args;
		await ctx.db.patch(id, data);
		return id;
	},
});

export const remove = mutation({
	args: {
		id: v.id("certificates"),
	},
	handler: async (ctx, args) => {
		await ctx.db.delete(args.id);
	},
});
