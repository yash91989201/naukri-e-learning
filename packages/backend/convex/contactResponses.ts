import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const submit = mutation({
	args: {
		name: v.string(),
		email: v.string(),
		phone: v.string(),
		message: v.optional(v.string()),
		certificateIds: v.optional(v.array(v.id("certificates"))),
	},
	handler: async (ctx, args) => {
		const id = await ctx.db.insert("contactResponses", {
			name: args.name,
			email: args.email,
			phone: args.phone,
			message: args.message,
			certificateIds: args.certificateIds ?? [],
			submittedAt: Date.now(),
		});
		return id;
	},
});

export const list = query({
	handler: async (ctx) => {
		const responses = await ctx.db
			.query("contactResponses")
			.order("desc")
			.collect();

		const responsesWithCertificates = await Promise.all(
			responses.map(async (response) => {
				const certificateIds = response.certificateIds ?? [];
				const certificates = await Promise.all(
					certificateIds.map(async (certId) => {
						return await ctx.db.get(certId);
					})
				);
				return {
					...response,
					certificates: certificates.filter((cert) => cert !== null),
				};
			})
		);

		return responsesWithCertificates;
	},
});
